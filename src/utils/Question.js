import Editor from '@/utils/Editor';

export default class Question {

    constructor(traits) {

        this.type = traits.type;
        this.statement = traits.questionStatement;
        this.color = 'default';

        const newer = (new Editor()).newModel();


        switch (this.type) {

            case 'Machine Learning':
                this.resources = traits.resources;
                break;

            case 'Coding Task':
                this.constraints = traits.constraints;
                this.sample_in = traits.sample_in;
                this.sample_out = traits.sample_out;
                
                this.lang = newer.lang;
                this.model = newer.model;
                break;

            case 'Writing Task':
                this.wordLimit = traits.wordLimit;
                break;

            case 'Multiple Choice Question':
                this.op = [];
                if (traits.op1) this.op.push(traits.op1);
                if (traits.op2) this.op.push(traits.op2);
                if (traits.op3) this.op.push(traits.op3);
                if (traits.op4) this.op.push(traits.op4);
                break;

        }


    }


}