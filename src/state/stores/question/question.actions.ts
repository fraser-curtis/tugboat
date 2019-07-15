import Axios from "axios";

export default class QuestionActions {
    public static GET_QUESTION = "question/GET_QUESTION";
    public static GET_QUESTION_PENDING = "question/GET_QUESTION_PENDING";
    public static GET_QUESTION_FULFILLED = "question/GET_QUESTION_FULFILLED";
    public static GET_QUESTION_REJECTED = "question/GET_QUESTION_REJECTED";

    /**
     * Dispatch an action to get the next question.
     */
    public static getQuestion() {
        return async (dispatch: Function) => {
            dispatch({ type: QuestionActions.GET_QUESTION_PENDING });

            try {
                const response = await Axios.get("http://jservice.io/api/random");
                return dispatch({ type: QuestionActions.GET_QUESTION_FULFILLED, payload: response.data });
            } catch (error) {
                return dispatch({ type: QuestionActions.GET_QUESTION_PENDING, payload: error });
            }
        };
    }
}
