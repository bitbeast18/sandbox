
import * as monaco from 'monaco-editor';

export default class Editor {

    constructor() {

        this._editor = null;
    }

    initCodeEditor() {

        this._editor = monaco.editor.create(
            document.getElementById("editor"),
            {
                theme: 'vs',
                automaticLayout: true,
                minimap: {
                    enabled: false,
                },
                model: null
            });

    }

    newModel() {

        let lang = 'python';
        let data = '// sandbox';

        const model = monaco.editor.createModel(data, lang);

        return { model, lang };
    }

    setModel(model) {
        this._editor.setModel(model);
    }

    getValue() {
        return this._editor.getValue();
    }
}

