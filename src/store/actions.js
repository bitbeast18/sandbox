import { db } from "@/firebase/init";
import router from "@/router/index";
import Question from "@/utils/Question";
import NotebookServer from "@/utils/NotebookServer";

const { ipcRenderer, clipboard } = require("electron");

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
        if (!docref.exists) {
          throw new Error("Invalid Test ID. Try re-entering.");
        }

        // Change problems to question in database later [inconsistency]
        for (let question of docref.data().problems) {
          state.allQuestions.push(new Question(question));
          if (question.type === "Machine Learning") {
            state.hasMl = true;
          }
        }

        commit("setCurQuestion", 0);

        if (state.hasMl) {
          try {
            NotebookServer.startServer();
          } catch (err) {
            throw new Error("'jupyter' is not installed on your machine!");
          }
        }

        // Clears the clipboard.
        clipboard.writeText(" ");

        // Sets up file manager.
        state.fileManager.setupFileManager(state.allQuestions, state.testId);

        state.submitManager.setupSubmitManager(state.userId, state.testId);

        state.loginLoader = false;
        state.session = true;
        ipcRenderer.send("session-started");
        dispatch("changeRoute");
      })
      .catch(err => {
        alert(err.message);
        state.loginLoader = false;
      });
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
      .catch(() => {});
  },

  runCodingTask({ state, commit, dispatch }) {
    state.runCodeLoader = true;

    state.fileManager.saveFile(state.curQuestion);

    dispatch("resetTestCases");

    try {
      // Calls to run PYTHON.
      if (state.curQuestion.curFile.name === "PYTHON") {
        state.runner.runPY(state.curQuestion);

        // Calls to run C.
      } else if (state.curQuestion.curFile.name === "C") {
        let compile_out = state.runner.compileC(
          state.curQuestion.curFile.addr,
          state.fileManager.compiled_data.c
        );

        if (compile_out.status === 0) {
          state.runner.runC(
            state.curQuestion,
            state.fileManager.compiled_data.c
          );
        } else {
          state.runTestCaseDialogText = compile_out.stderr.trim();
        }

        // Calls to run C++.
      } else if (state.curQuestion.curFile.name === "C++") {
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

        // Calls to run JAVA.
      } else {
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

      state.runCodeLoader = false;
      state.runDialogState = true;

      // If any language fails to run.
    } catch (error) {
      commit("displayErrorMessage", error.message);
    }
  },

  resetTestCases({ state }) {
    for (let i = 0; i < state.curQuestion.testcases.length; i++) {
      state.curQuestion.testcases[i].stderr = "";
      state.curQuestion.testcases[i].stdout = "";
      state.curQuestion.testcases[i].status = "default";
    }
  },

  submitTask({ state, dispatch }, type) {
    state.submitLoader = true;

    if (type === "CodingTask") {
      dispatch("runCodingTask");

      state.submitManager.submitCodingTask(
        state.curQuestion,
        state.curQuestionIdx
      );
    } else if (type === "WritingTask") {
      state.submitManager.submitWritingTask(
        state.curQuestion,
        state.curQuestionIdx
      );
    } else if (type === "MCQ") {
      state.submitManager.submitMCQ(state.curQuestion, state.curQuestionIdx);
    } else if (type === "ML") {
      document.getElementById("notebook").send("saveNotebook");
      state.submitManager.submitML(state.curQuestion, state.curQuestionIdx);
    } else {
      // type === "Web Dev"
      state.submitManager.submitWebDev(state.curQuestion, state.curQuestionIdx);
    }

    state.curQuestion.color = "success"; // Means saved and visited.

    state.submitLoader = false;
  },

  endTest({ state }) {
    state.endTestLoader = true;
    state.submitManager.createBackupFile();

    // destructive action ahead.
    state.fileManager.cleanup();

    let data = {};
    data[state.userId] = state.submitManager.submitValue();

    db.collection("submissionBunch")
      .doc(state.testId)
      .update(data)
      .then(function() {
        state.endTestLoader = false;
        router.push("/landing");
        state.session = false;
        NotebookServer.stopServer();
        ipcRenderer.send("session-ended");
      });
  }
};
