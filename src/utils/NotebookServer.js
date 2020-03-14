import { exec } from "child_process";
import path from "path";
import os from "os";
import log from "electron-log";
// import configManager from "./ConfigManager";

class NotebookServer {
  constructor() {
    this.childProcess = null;

    this.condaPath = null;

    if (process.platform === "win32") {
      this.condaPath = path.join(
        os.homedir(),
        "Anaconda3",
        "condabin",
        "conda"
      );
    } else {
      this.condaPath = path.join(
        os.homedir(),
        "anaconda3",
        "condabin",
        "conda"
      );
    }

    this.command = `jupyter notebook --no-mathjax --no-browser --port=4321 --notebook-dir="${os.tmpdir()}" --NotebookApp.token=''`;
  }

  startServer() {
    this.childProcess = exec(this.command, (error, stdout, stderr) => {
      if (error) {
        throw new Error("'jupyter' is not installed on your machine!");
      }
      if (stdout) {
        log.info(stdout.toString());
      }
      if (stderr) {
        log.info(stderr.toString());
      }
    });
  }

  stopServer() {
    if (this.childProcess) {
      this.childProcess.kill("SIGINT");
    }

    if (this.childProcess) {
      this.childProcess.kill();
    }
  }
}

export default new NotebookServer();
