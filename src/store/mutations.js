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
  }
};
