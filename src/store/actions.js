import { db } from '@/firebase/init';
import router from '@/router/index';
import Question from '@/utils/Question';

import {ipcRenderer} from 'electron';

export default {

    startSession({ state, commit, dispatch }, payload) {

        state.loginLoader = true;

        state.userId = payload.userId;
        state.testId = payload.testId;

        if (state.testId === null || state.userId === null) {
            alert('All fields are compulsory!');
            return;
        }

        db.collection('testBunch').doc(state.testId).get()
            .then((docref) => {
                console.log(docref.data());
                // Change problems to question in database later [inconsistency]
                for (let question of docref.data().problems) {
                    state.allQuestions.push(new Question(question));
                }

                commit('setCurQuestion', 0);

                state.loginLoader = false;
                ipcRenderer.send('session-started');
                dispatch('changeRoute');

            }).catch((err) => {
                alert(err.message);
                state.loginLoader = false;
            })

    },

    changeRoute({ state }) {

        let nextRoute = null;

        switch (state.curQuestion.type) {

            case 'Machine Learning':
                nextRoute = '/ml';
                break;

            case 'Coding Task':
                nextRoute = '/coding';
                break;

            case 'Multiple Choice Question':
                nextRoute = '/mcq';
                break;

            case 'Writing Task':
                nextRoute = '/writing';
                break;
        }

        router.push('/session' + nextRoute + "/" + state.curQuestionIdx).catch((err) => {console.log("ignore: \n" + err)});
    },



}