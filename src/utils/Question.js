import Editor from "@/utils/Editor";

export default class Question {
  constructor(traits) {
    this.type = traits.type;
    this.statement = traits.questionStatement;
    this.color = "default";

    let new_model = null;
    let js_model = null;
    let css_model = null;
    let html_model = null;
    let editor = new Editor();

    if (traits.type === "Coding Task") {
      new_model = editor.newModel(traits.language);
    }

    if (traits.type === "Web Dev") {
      js_model = editor.newModel('javascript');
      html_model = editor.newModel('html');
      css_model = editor.newModel('css');
    }

    switch (this.type) {
      case "Machine Learning":
        this.resources = traits.resources;
        break;

      case "Coding Task":
        this.constraints = traits.constraints;
        this.sample_in = traits.sample_in;
        this.sample_out = traits.sample_out;

        this.lang = traits.language;
        this.model = new_model;
        break;

      case "Writing Task":
        this.wordLimit = traits.wordLimit;
        break;

      case "Web Dev":
        this.files = {
          js: {
            name: 'JAVASCRIPT.js',
            model: js_model
          },
          html: {
            name: 'HTML.html',
            model: html_model
          },
          css: {
            name: 'CSS.css',
            model: css_model
          }
        }

        this.curFile = this.files.html;
        break;

      case "Multiple Choice Question":
        this.op = [];
        if (traits.op1) this.op.push(traits.op1);
        if (traits.op2) this.op.push(traits.op2);
        if (traits.op3) this.op.push(traits.op3);
        if (traits.op4) this.op.push(traits.op4);
        break;
    }
  }
}
