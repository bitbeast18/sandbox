import { exec } from "child_process";
import os from "os";

class NotebookServer {
  constructor() {
    this.childProcess = null;
    this.command = `jupyter notebook --no-mathjax --no-browser --port=10301 --notebook-dir="${os.tmpdir()}"`;
  }

  startServer() {
    this.childProcess = exec(
      this.command,
      {
        env: { JUPYTER_CONFIG_DIR: "src/utils/NotebookConfig" },
        windowsHide: false
      },
      () => {}
    );
  }

  stopServer() {
    if (this.childProcess) {
      this.childProcess.kill();
    }
  }
}

export default new NotebookServer();
