import Vue from "vue";
import VueRouter from "vue-router";

import Login from '@/views/Login.vue';
import Session from '@/views/Session.vue';
import Landing from '@/views/Landing.vue';

import CodingQue from '@/views/question/CodingTask.vue';
import CodingAns from '@/views/answer/CodingTask.vue';

import MLQue from '@/views/question/MachineLearning.vue';
import MLAns from '@/views/answer/MachineLearning.vue';

import MCQQue from '@/views/question/MCQ.vue';
import MCQAns from '@/views/answer/MCQ.vue';

import WriteQue from '@/views/question/WritingTask.vue';
import WriteAns from '@/views/answer/WritingTask.vue';

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
        path: "coding",
        name: "Coding Task",
        components: {
          question: CodingQue,
          answer: CodingAns
        }
      },
      {
        path: "ml",
        name: "Machine Learning",
        components: {
          question: MLQue,
          answer: MLAns
        }
      },

      {
        path: "mcq",
        name: "MCQ",
        components: {
          question: MCQQue,
          answer: MCQAns
        }
      },

      {
        path: "writing",
        name: "Writing Task",
        components: {
          question: WriteQue,
          answer: WriteAns
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
