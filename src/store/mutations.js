import Editor from "@/utils/Editor";
import Runner from "@/utils/Runner";
import fileManager from "@/utils/FileManager";
import SubmitManager from "@/utils/SubmitManager";

export default {
  // Initialisations.

  initStore(state) {
    state.editor = new Editor();
    state.runner = new Runner();
    state.fileManager = fileManager;
    state.submitManager = new SubmitManager();
  },

  initCodeEditor(state) {
    state.editor.initCodeEditor();
  },

  setCurQuestion(state, idx) {
    state.curQuestion = state.allQuestions[idx];
    state.curQuestionIdx = idx;
    if (state.curQuestion.color === "default") {
      state.curQuestion.color = "error";
    }
  },

  toggleRunDialogState(state) {
    if (state.runDialogState) {
      state.runTestCaseDialogText = "";
    }
    state.runDialogState = !state.runDialogState;
  },

  toggleWebDialogState(state) {
    state.webDialogState = !state.webDialogState;
  },

  setWebDevCurFile(state, obj) {
    state.curQuestion.curFile = obj;
    state.editor.setModel(obj.model);
  },

  setCodingTaskCurFile(state, obj) {
    state.curQuestion.curFile = obj;
    state.editor.setModel(obj.model);
  },

  setErrorArea(state, idx) {
    state.runTestCaseDialogText = state.curQuestion.testcases[idx].stderr;
  },

  updateMCQ(state, val) {
    state.curQuestion.answer.option = val;
    state.curQuestion.answer.value = state.curQuestion.op[val];
  },

  updateWritingTask(state, val) {
    state.curQuestion.answer = val;
  },

  displayErrorMessage(state, msg) {
    state.errorMessage = msg;
    state.errorDialogState = true;

    // Loaders
    state.loginLoader = false;
    state.nextLoader = false;
    state.prevLoader = false;
    state.submitLoader = false;
    state.endTestLoader = false;

    // Coding Task
    state.runCodeLoader = false;

    // Web Dev
    state.renderCodeLoader = false;
  },

  toggleErrorDialogState(state) {
    state.errorDialogState = !state.errorDialogState;
  }
};
