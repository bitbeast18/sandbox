import * as monaco from "monaco-editor";

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
      model: null
    });
  }

  newModel(lang) {
    let data = "// sandbox";
    if (lang === "any") {
      lang = "C";
    }

    if (lang === "PYTHON") {
      lang = "python";
    } else if (lang === "JAVA") {
      lang = "java";
    } else if (lang === "C++") {
      lang = "cpp";
    } else {
      lang = "c";
    }

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
