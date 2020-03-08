export default {
  isDockLeft: false,
  isDarkTheme: false,

  // Instances
  editor: null,
  runner: null,
  notifier: null,

  hasMl: true,

  // creds
  testId: null,
  userId: null,

  // Questions related details.
  allQuestions: [],
  curQuestion: null,
  curQuestionIdx: null,

  // Dialog
  runDialogState: false,
  webDialogState: false,

  // Dialog Text
  runTestCaseDialogText: "",

  // Loaders
  loginLoader: false,
  nextLoader: false,
  prevLoader: false,

  // Coding Task
  runCodeLoader: false,
  submitCodeLoader: false,

  // Web Dev
  renderCodeLoader: false,
  submitWebCodeLoader: false,

  // ML
  submitNotebookLoader: false,

  // MCQ
  saveMCQLoader: false,

  // Writing Task
  saveWTLoader: false
};
