
import Editor from '@/utils/Editor';

export default {

    // Initialisations.

    initStore(state){
        state.editor = new Editor();
    },

    initCodeEditor(state){
        state.editor.initCodeEditor();
    },

    setSession(state, newValue){
        state.session = newValue;
    }

}