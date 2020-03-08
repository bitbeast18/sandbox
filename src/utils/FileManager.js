import os from "os";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

export default class FileManager {
  constructor() {
    this.base_addr = null;

    if (fs.existsSync(path.resolve(os.tmpdir(), "compiled_data"))) {
      execSync("rm -rf " + path.resolve(os.tmpdir(), "compiled_data"));
    }

    fs.mkdirSync(path.resolve(os.tmpdir(), "compiled_data"));

    // Python doesn't needs to be compiled :)

    fs.mkdirSync(path.resolve(os.tmpdir(), "compiled_data", "c"));
    fs.mkdirSync(path.resolve(os.tmpdir(), "compiled_data", "cpp"));
    fs.mkdirSync(path.resolve(os.tmpdir(), "compiled_data", "java"));

    this.compiled_data = {
      c: path.resolve(os.tmpdir(), "compiled_data", "c", "target"),
      cpp: path.resolve(os.tmpdir(), "compiled_data", "cpp", "target"),
      java: path.resolve(os.tmpdir(), "compiled_data", "java", "target")
    };

    fs.writeFileSync(this.compiled_data.c);
    fs.writeFileSync(this.compiled_data.cpp);
    fs.mkdirSync(this.compiled_data.java);
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
            !fs.existsSync(
              path.resolve(this.base_addr, "webDev", "que" + (i + 1))
            )
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

        questions[i].addr = {
          abs: null,
          rel: null
        };

        questions[i].addr.abs = path.resolve(
          this.base_addr,
          "machineLearning",
          "que" + (i + 1) + ".ipynb"
        );

        questions[i].addr.rel = path.relative(
          os.tmpdir(),
          questions[i].addr.abs
        );

        console.log(questions[i].addr);

        fs.writeFileSync(
          questions[i].addr.abs,
          `{
          "cells": [],
          "metadata": {},
          "nbformat": 4,
          "nbformat_minor": 2
         }`
        );
      }
    }
  }

  saveFile(curQuestion) {
    for (let i = 0; i < curQuestion.files.length; i++) {
      let content = curQuestion.files[i].model.getValue();
      let file = curQuestion.files[i].addr;

      fs.writeFileSync(file, content);
    }
  }
}
