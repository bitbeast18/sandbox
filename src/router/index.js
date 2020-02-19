import Vue from "vue";
import VueRouter from "vue-router";

import Login from '@/views/Login.vue';
import Session from '@/views/Session.vue';
import Landing from '@/views/Landing.vue';

import CodingQue from '@/views/question/CodingTask.vue';
import CodingAns from '@/views/answer/CodingTask.vue';
import CodingApp from '@/views/appbar/CodingTask.vue';
import CodingBottom from '@/views/bottombar/CodingTask.vue';

import MLQue from '@/views/question/MachineLearning.vue';
import MLAns from '@/views/answer/MachineLearning.vue';
import MLApp from '@/views/appbar/MachineLearning.vue';
import MLBottom from '@/views/bottombar/MachineLearning.vue';

import MCQQue from '@/views/question/MCQ.vue';
import MCQAns from '@/views/answer/MCQ.vue';
import MCQApp from '@/views/appbar/MCQ.vue';
import MCQBottom from '@/views/bottombar/MCQ.vue';

import WriteQue from '@/views/question/WritingTask.vue';
import WriteAns from '@/views/answer/WritingTask.vue';
import WriteApp from '@/views/appbar/WritingTask.vue';
import WriteBottom from '@/views/bottombar/WritingTask.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/session",
    name: "Session",
    component: Session,
    children: [
      {
        path: "coding/:id",
        name: "Coding Task",
        components: {
          question: CodingQue,
          answer: CodingAns,
          appbar: CodingApp,
          bottombar: CodingBottom
        }
      },
      {
        path: "ml/:id",
        name: "Machine Learning",
        components: {
          question: MLQue,
          answer: MLAns,
          appbar: MLApp,
          bottombar: MLBottom
        }
      },

      {
        path: "mcq/:id",
        name: "MCQ",
        components: {
          question: MCQQue,
          answer: MCQAns,
          appbar: MCQApp,
          bottombar: MCQBottom
        }
      },

      {
        path: "writing/:id",
        name: "Writing Task",
        components: {
          question: WriteQue,
          answer: WriteAns,
          appbar: WriteApp,
          bottombar: WriteBottom
        }
      },
    ]

  },
  {
    path: "/landing",
    name: "Landing",
    components: {
      default: Landing
    }
  }

];

const router = new VueRouter({
  routes
});

export default router;
