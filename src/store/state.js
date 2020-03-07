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

  // Loaders
  loginLoader: false,
  nextLoader: false,
  prevLoader: false,

  // Dialog
  runDialogState: false,
  webDialogState: false,

  // Dialog Text
  runTestCaseDialogText: ""
};
