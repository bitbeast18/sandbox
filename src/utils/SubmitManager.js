import fs from "fs";
import os from "os";
import path from "path";

export default class SubmitManager {
  constructor() {
    this.finalSubmission = {};
  }

  setupSubmitManager(userId, testId) {
    this.finalSubmission.userId = userId;
    this.finalSubmission.testId = testId;
  }

  submitMCQ(curQuestion, idx) {
    let que = "que" + (idx + 1);
    this.finalSubmission[que] = {};

    this.finalSubmission[que].type = "Multiple Choice Question";
    this.finalSubmission[que].answer = curQuestion.answer;
  }

  submitWebDev(curQuestion, idx) {
    let que = "que" + (idx + 1);
    this.finalSubmission[que] = {};

    this.finalSubmission[que].type = "Web Dev";
    this.finalSubmission[que].html = curQuestion.files[0].model.getValue();
    this.finalSubmission[que].css = curQuestion.files[1].model.getValue();
    this.finalSubmission[
      que
    ].javascript = curQuestion.files[2].model.getValue();
  }

  submitCodingTask(curQuestion, idx) {
    let que = "que" + (idx + 1);
    this.finalSubmission[que] = {};

    this.finalSubmission[que].type = "Coding Task";
    this.finalSubmission[que].code = curQuestion.curFile.model.getValue();
    this.finalSubmission[que].lang = curQuestion.curFile.modelLang;

    let correct = 0;
    for (let i = 0; i < curQuestion.testcases.length; i++) {
      if (curQuestion.testcases[i].status === "success") {
        correct++;
      }
    }

    this.finalSubmission[que].correct = correct;
  }

  submitML(curQuestion, idx) {
    let que = "que" + (idx + 1);
    this.finalSubmission[que] = {};

    this.finalSubmission[que].type = "Machine Learning";
    this.finalSubmission[que].notebook = fs.readFileSync(curQuestion.addr.abs, {
      encoding: "utf8"
    });
  }

  submitWritingTask(curQuestion, idx) {
    let que = "que" + (idx + 1);
    this.finalSubmission[que] = {};

    this.finalSubmission[que].type = "Writing Task";
    this.finalSubmission[que].answer = curQuestion.answer;
  }

  createBackupFile() {
    let addr = path.resolve(
      os.homedir(),
      "sandboxTest:" + new Date().getDate()
    );

    if (fs.existsSync(addr)) {
      fs.unlinkSync(addr);
    }

    fs.writeFileSync(addr, JSON.stringify(this.finalSubmission));
  }

  submitValue() {
    return this.finalSubmission;
  }
}
