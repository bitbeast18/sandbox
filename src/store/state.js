export default {
  isDockLeft: false,
  isDarkTheme: false,

  session: false,

  errorMessage: "",

  // Instances
  editor: null,
  runner: null,
  notifier: null,
  submitManager: null,
  fileManager: null,

  hasMl: false,

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
  errorDialogState: false,

  // Dialog Text
  runTestCaseDialogText: "",

  // Loaders
  loginLoader: false,
  nextLoader: false,
  prevLoader: false,
  submitLoader: false,
  endTestLoader: false,

  // Coding Task
  runCodeLoader: false,

  // Web Dev
  renderCodeLoader: false
};
