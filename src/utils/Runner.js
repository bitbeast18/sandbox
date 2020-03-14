import fs from "fs";
import { spawnSync } from "child_process";
import fm from "@/utils/FileManager";

export default class Runner {
  constructor() {
    // TODO: Add checks for language specific compiler in PATH variable.
  }

  // Methods responsible for Compiling CodeFile source.

  compileC(addr, execPath) {
    const compiler_out = spawnSync("gcc", [addr, "-o", execPath], {
      encoding: "utf-8",
      windowsHide: true
    });

    if (compiler_out.error) {
      throw new Error("'gcc' is not installed on your machine!");
    }

    return compiler_out;
  }

  compileCPP(addr, execPath) {
    const compiler_out = spawnSync("g++", [addr, "-o", execPath], {
      encoding: "utf-8",
      windowsHide: true
    });

    if (compiler_out.error) {
      throw new Error("'g++' is not installed on your machine!");
    }

    return compiler_out;
  }

  compileJAVA(addr, execPath) {
    if (fs.existsSync(execPath)) {
      fm.cleanup(execPath);
    }

    fs.mkdirSync(execPath);

    const compiler_out = spawnSync("javac", ["-d", execPath, addr], {
      encoding: "utf-8",
      windowsHide: true
    });

    if (compiler_out.error) {
      throw new Error("'java' is not installed on your machine!");
    }

    return compiler_out;
  }

  // Methods responsible for Running CodeFile source.

  runC(curQuestion, runPath) {
    let runner_out;

    for (let i = 0; i < curQuestion.testcases.length; i++) {
      runner_out = spawnSync(runPath, {
        input: curQuestion.testcases[i].input,
        encoding: "utf-8",
        windowsHide: true
      });

      this.gradeOutput(curQuestion, i, runner_out);
    }
  }

  runCPP(curQuestion, runPath) {
    let runner_out;

    for (let i = 0; i < curQuestion.testcases.length; i++) {
      runner_out = spawnSync(runPath, {
        input: curQuestion.testcases[i].input,
        encoding: "utf-8",
        windowsHide: true
      });

      this.gradeOutput(curQuestion, i, runner_out);
    }
  }

  runJAVA(curQuestion, runDir) {
    let runner_out;

    for (let i = 0; i < curQuestion.testcases.length; i++) {
      runner_out = spawnSync("java", ["-cp", runDir, "Solution"], {
        input: curQuestion.testcases[i].input,
        encoding: "utf-8",
        windowsHide: true
      });

      this.gradeOutput(curQuestion, i, runner_out);
    }
  }

  runPY(curQuestion) {
    let runner_out;

    for (let i = 0; i < curQuestion.testcases.length; i++) {
      runner_out = spawnSync("python3", [curQuestion.curFile.addr], {
        input: curQuestion.testcases[i].input,
        encoding: "utf-8",
        windowsHide: true
      });

      if (runner_out.error) {
        throw new Error("'python3 is not installed on your machine!'");
      }

      this.gradeOutput(curQuestion, i, runner_out);
    }
  }

  gradeOutput(curQuestion, i, runner_out) {
    if (runner_out.status === 0) {
      // Testcase ran successfully.
      curQuestion.testcases[i].stdout = runner_out.stdout.trim();
      curQuestion.testcases[i].stderr = runner_out.stderr.trim();

      curQuestion.testcases[i].status =
        curQuestion.testcases[i].stdout === curQuestion.testcases[i].expected
          ? "success"
          : "error";

      if (curQuestion.testcases[i].status === "success") {
        curQuestion.testcases[i].stderr = "Correct Answer!";
      } else {
        curQuestion.testcases[i].stderr = "Wrong Answer!";
      }
    } else {
      curQuestion.testcases[i].status = "error";
      curQuestion.testcases[i].stderr = runner_out.stderr.trim();
    }
  }
}
