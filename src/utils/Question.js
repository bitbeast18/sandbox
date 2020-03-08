import Editor from "@/utils/Editor";
import TestCase from "@/utils/TestCase";

export default class Question {
  constructor(traits) {
    this.type = traits.type;
    this.statement = traits.questionStatement;
    this.color = "default";

    let c_model = null;
    let cpp_model = null;
    let java_model = null;
    let python_model = null;
    let new_model = null;

    let js_model = null;
    let css_model = null;
    let html_model = null;

    let editor = new Editor();

    if (traits.type === "Coding Task") {
      if (traits.language === "any") {
        c_model = editor.newModel("c");
        cpp_model = editor.newModel("cpp");
        java_model = editor.newModel("java");
        python_model = editor.newModel("python");
      } else {
        new_model = editor.newModel(traits.language);
      }
    }

    if (traits.type === "Web Dev") {
      js_model = editor.newModel("javascript");
      html_model = editor.newModel("html");
      css_model = editor.newModel("css");
    }

    switch (this.type) {
      case "Machine Learning":
        this.resources = traits.resources;
        this.addr = {
          rel: null,
          abs: null
        };
        break;

      case "Coding Task":
        this.constraints = traits.constraints;
        this.sample_in = traits.sample_in;
        this.sample_out = traits.sample_out;
        this.testcases = this.fillTestcases(traits.testcases);

        if (traits.language === "any") {
          this.files = [
            {
              name: "C",
              modelLang: "c",
              model: c_model,
              addr: null
            },
            {
              name: "C++",
              modelLang: "cpp",
              model: cpp_model,
              addr: null
            },
            {
              name: "JAVA",
              modelLang: "java",
              model: java_model,
              addr: null
            },
            {
              name: "PYTHON",
              modelLang: "python",
              model: python_model,
              addr: null
            }
          ];
        } else if (traits.language === "python") {
          this.files = [
            {
              name: "PYTHON",
              modelLang: "python",
              model: new_model,
              addr: null
            }
          ];
        } else if (traits.language === "c") {
          this.files = [
            {
              name: "C",
              modelLang: "c",
              model: new_model,
              addr: null
            }
          ];
        } else if (traits.language === "cpp") {
          this.files = [
            {
              name: "C++",
              modelLang: "cpp",
              model: new_model,
              addr: null
            }
          ];
        } else {
          this.files = [
            {
              name: "JAVA",
              modelLang: "java",
              model: new_model,
              addr: null
            }
          ];
        }

        this.curFile = this.files[0];
        break;

      case "Writing Task":
        this.wordLimit = traits.wordLimit;
        this.answer = null;
        break;

      case "Web Dev":
        this.files = [
          {
            name: "HTML",
            modelLang: "html",
            model: html_model,
            addr: null
          },
          {
            name: "CSS",
            model: css_model,
            modelLang: "css",
            addr: null
          },
          {
            name: "JAVASCRIPT",
            model: js_model,
            modelLang: "javascript",
            addr: null
          }
        ];

        this.curFile = this.files[0];
        break;

      case "Multiple Choice Question":
        this.op = [];
        if (traits.op1) this.op.push(traits.op1);
        if (traits.op2) this.op.push(traits.op2);
        if (traits.op3) this.op.push(traits.op3);
        if (traits.op4) this.op.push(traits.op4);
        this.answer = {
          option: null,
          value: null
        };
        break;
    }
  }

  fillTestcases(testcases) {
    if (testcases === null || testcases === undefined) {
      return [];
    }

    let temp = [];

    for (let i = 0; i < testcases.length; i++) {
      temp.push(
        new TestCase(testcases[i].inputData, testcases[i].expectedData)
      );
    }

    return temp;
  }
}
