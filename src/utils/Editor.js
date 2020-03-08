import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default class Editor {
  constructor() {
    this._editor = null;
  }

  initCodeEditor() {
    this._editor = monaco.editor.create(document.getElementById("editor"), {
      automaticLayout: true,
      minimap: {
        enabled: false
      },
      model: null,
      fontSize: 16
    });
  }

  newModel(lang) {
    let data = "";
    const model = monaco.editor.createModel(data, lang);

    return model;
  }

  setModel(model) {
    this._editor.setModel(model);
  }

  getValue() {
    return this._editor.getValue();
  }

  setTheme(mode) {
    monaco.editor.setTheme(mode);
  }
}
