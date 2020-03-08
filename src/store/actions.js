import { db } from "@/firebase/init";
import router from "@/router/index";
import Question from "@/utils/Question";
import NotebookServer from "@/utils/NotebookServer";

import { ipcRenderer } from "electron";

export default {
  startSession({ state, commit, dispatch }, payload) {
    state.loginLoader = true;

    state.userId = payload.userId;
    state.testId = payload.testId;

    if (state.testId === null || state.userId === null) {
      alert("All fields are compulsory!");
      return;
    }

    db.collection("testBunch")
      .doc(state.testId)
      .get()
      .then(docref => {
        console.log(docref.data());
        // Change problems to question in database later [inconsistency]
        for (let question of docref.data().problems) {
          state.allQuestions.push(new Question(question));
        }

        commit("setCurQuestion", 0);

        if (state.hasMl) {
          NotebookServer.startServer();
        }

        state.fileManager.setupFileManager(state.allQuestions, state.testId);

        state.loginLoader = false;
        ipcRenderer.send("session-started");
        dispatch("changeRoute");
      });
    // .catch(err => {
    //   alert(err.message);
    //   state.loginLoader = false;
    // });
  },

  changeRoute({ state }) {
    let nextRoute = null;

    switch (state.curQuestion.type) {
      case "Machine Learning":
        nextRoute = "/ml";
        break;

      case "Coding Task":
        nextRoute = "/coding";
        break;

      case "Multiple Choice Question":
        nextRoute = "/mcq";
        break;

      case "Writing Task":
        nextRoute = "/writing";
        break;

      case "Web Dev":
        nextRoute = "/webdev";
        break;
    }

    router
      .push("/session" + nextRoute + "/" + state.curQuestionIdx)
      .catch(err => {
        console.log("ignore: \n" + err);
      });
  },

  runCodingTask({ state, dispatch }) {
    state.fileManager.saveFile(state.curQuestion);

    dispatch("resetTestCases");

    if (state.curQuestion.curFile.name === "PYTHON") {
      // Python code handling.

      state.runner.runPY(state.curQuestion);
    } else if (state.curQuestion.curFile.name === "C") {
      // C code handling.

      let compile_out = state.runner.compileC(
        state.curQuestion.curFile.addr,
        state.fileManager.compiled_data.c
      );

      if (compile_out.status === 0) {
        state.runner.runC(state.curQuestion, state.fileManager.compiled_data.c);
      } else {
        state.runTestCaseDialogText = compile_out.stderr.trim();
      }
    } else if (state.curQuestion.curFile.name === "C++") {
      // C++ code handling.

      let compile_out = state.runner.compileCPP(
        state.curQuestion.curFile.addr,
        state.fileManager.compiled_data.cpp
      );

      if (compile_out.status === 0) {
        state.runner.runCPP(
          state.curQuestion,
          state.fileManager.compiled_data.cpp
        );
      } else {
        state.runTestCaseDialogText = compile_out.stderr.trim();
      }
    } else {
      // Java code handling.

      let compile_out = state.runner.compileJAVA(
        state.curQuestion.curFile.addr,
        state.fileManager.compiled_data.java
      );

      if (compile_out.status === 0) {
        state.runner.runJAVA(
          state.curQuestion,
          state.fileManager.compiled_data.java
        );
      } else {
        state.runTestCaseDialogText = compile_out.stderr.trim();
      }
    }
  },

  resetTestCases({ state }) {
    for (let i = 0; i < state.curQuestion.testcases.length; i++) {
      state.curQuestion.testcases[i].stderr = "";
      state.curQuestion.testcases[i].stdout = "";
      state.curQuestion.testcases[i].status = "default";
    }
  }
};
