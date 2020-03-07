import os from "os";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

export default class FileManager {
  constructor() {
    this.base_addr = null;
  }

  setupFileManager(questions, testId) {
    this.base_addr = path.resolve(os.tmpdir(), testId);
    
    /*
     ** Danger !!!
     ** Destructive command ahead.
     ** Decide what to do if the directory already exists.
     ** For now just deleting the directory.
     **
     ** TODO: Should be used for recovering the session.
     */

    if (fs.existsSync(this.base_addr)) {
      execSync("rm -rf " + this.base_addr);
    }

    // Destructive command ends here.

    fs.mkdirSync(path.resolve(os.tmpdir(), testId));

    console.log(questions);

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].type === "Coding Task") {
        if (!fs.existsSync(path.resolve(this.base_addr, "codingTasks"))) {
          fs.mkdirSync(path.resolve(this.base_addr, "codingTasks"));
        }

        for (let f = 0; f < questions[i].files.length; f++) {
          let ext;

          if (questions[i].files[f].name === "PYTHON") {
            ext = ".py";
          } else if (questions[i].files[f].name === "C") {
            ext = ".c";
          } else if (questions[i].files[f].name === "C++") {
            ext = ".cpp";
          } else {
            ext = ".java";
          }

          questions[i].files[f].addr = path.resolve(
            this.base_addr,
            "codingTasks",
            "que" + (i + 1) + ext
          );

          fs.writeFileSync(questions[i].files[f].addr, "");
        }
      } else if (questions[i].type === "Web Dev") {
        if (!fs.existsSync(path.resolve(this.base_addr, "webDev"))) {
          fs.mkdirSync(path.resolve(this.base_addr, "webDev"));
        }

        for (let f = 0; f < questions[i].files.length; f++) {
          let ext;

          if (questions[i].files[f].name === "JAVASCRIPT") {
            ext = "que" + (i + 1) + ".js";
          } else if (questions[i].files[f].name === "HTML") {
            ext = "que" + (i + 1) + ".html";
          } else {
            ext = "que" + (i + 1) + ".css";
          }

          if (
            !fs.existsSync(path.resolve(this.base_addr, "webDev", "que" + (i + 1)))
          ) {
            fs.mkdirSync(
              path.resolve(this.base_addr, "webDev", "que" + (i + 1))
            );
          }

          questions[i].files[f].addr = path.resolve(
            this.base_addr,
            "webDev",
            "que" + (i + 1),
            ext
          );

          fs.writeFileSync(questions[i].files[f].addr, "");
        }
      } else if (questions[i].type === "Machine Learning") {
        if (!fs.existsSync(path.resolve(this.base_addr, "machineLearning"))) {
          fs.mkdirSync(path.resolve(this.base_addr, "machineLearning"));
        }

        questions[i].addr = path.resolve(
          this.base_addr,
          "machineLearning",
          "que" + (i + 1) + ".ipynb"
        );

        fs.writeFileSync(questions[i].addr, "");
      }
    }
  }
}
