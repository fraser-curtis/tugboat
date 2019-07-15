import { IQuestion } from "./question.interface";
import { Reducer } from "redux";
import QuestionActions from "./question.actions";
import { IQuestionResource } from "../../../rest/question.resource.interface";
import GameActions from "../game/game.actions";

const reducer: Reducer<IQuestion> = (state: IQuestion = {}, action?) => {
    switch (action.type) {
        case QuestionActions.GET_QUESTION_FULFILLED: {
            const questions = action.payload as IQuestionResource[];
            const question = questions[0];

            return {
                loading: false,
                question: question.question,
                answer: question.answer
            };
        }
        case QuestionActions.GET_QUESTION_PENDING: {
            return {
                loading: true
            };
        }
        case QuestionActions.GET_QUESTION_REJECTED: {
            return {
                loading: false
            };
        }
        case GameActions.END_GAME: {
            return {
                loading: false,
                question: undefined,
                answer: undefined
            };
        }
    }

    return state;
};

export default reducer;
