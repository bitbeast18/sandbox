import { exec } from "child_process";
import os from "os";

class NotebookServer {
  constructor() {
    console.log("Working server...");
    this.childProcess = null;
    this.command = `jupyter notebook --no-mathjax --no-browser --port=10301 --notebook-dir="${os.tmpdir()}"`;
    console.log(this.command);
  }

  startServer() {
    this.childProcess = exec(
      this.command,
      {
        env: { JUPYTER_CONFIG_DIR: "src/utils/NotebookConfig" },
        windowsHide: false
      },
      err => {
        console.log(err);
      }
    );
  }

  stopServer() {
    if (this.childProcess) {
      this.childProcess.kill();
    }
  }
}

export default new NotebookServer();
