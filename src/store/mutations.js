import Editor from "@/utils/Editor";

export default {
  // Initialisations.

  initStore(state) {
    state.editor = new Editor();
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
    state.runDialogState = !state.runDialogState;
  },

  toggleWebDialogState(state){
    state.webDialogState = !state.webDialogState;
  },

  setWebDevCurFile(state, obj){
    state.curQuestion.curFile = obj;
    state.editor.setModel(obj.model);
  }


};
