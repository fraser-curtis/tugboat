import { IHttpAction } from "../http-action.interface";
import { IStore } from "../store.interface";
import axios from "axios";
import { FIRESTORE_ROOT } from "../../../constants/url.constants";
import LeaderboardActions from "../leaderboard/leaderboard.actions";
//@ts-ignore
import FireStoreParser from "firestore-parser";

export default class GameActions {
    public static START_GAME = "game/START_GAME";
    public static END_GAME = "game/END_GAME";

    public static SUBMIT_ANSWER = "game/SUBMIT_ANSWER";

    public static POST_CREATE_USER = "game/GET_CREATE_USER";
    public static POST_CREATE_USER_PENDING = "game/POST_CREATE_USER_PENDING";
    public static POST_CREATE_USER_FULFILLED = "game/POST_CREATE_USER_FULFILLED";
    public static POST_CREATE_USER_REJECTED = "game/POST_CREATE_USER_REJECTED";

    public static PATCH_USER_SCORE = "game/PATCH_USER_SCORE";
    public static PATCH_USER_SCORE_PENDING = "game/PATCH_USER_SCORE_PENDING";
    public static PATCH_USER_SCORE_FULFILLED = "game/PATCH_USER_SCORE_FULFILLED";
    public static PATCH_USER_SCORE_REJECTED = "game/PATCH_USER_SCORE_REJECTED";

    /**
     * Return an action to start the game.
     */
    public static startGame(): IHttpAction<void> {
        return {
            type: GameActions.START_GAME,
            payload: undefined
        };
    }

    /**
     * Dispatch an action to end the game.
     */
    public static endGame() {
        return async (dispatch: Function) => {
            dispatch(LeaderboardActions.getLeaderboard());

            return dispatch({
                type: GameActions.END_GAME,
                payload: undefined
            });
        };
    }

    /**
     * Dispatch an action to create a user.
     *
     * @param name  the name of the user being created.
     */
    public static createUser(name: string) {
        return async (dispatch: Function) => {
            try {
                dispatch({ type: GameActions.POST_CREATE_USER_PENDING, payload: undefined });
                const response = await axios.post(FIRESTORE_ROOT + "users", {
                    fields: {
                        name: { stringValue: name },
                        attempts: { integerValue: 0 },
                        score: { integerValue: 0 }
                    }
                });
                dispatch({ type: GameActions.POST_CREATE_USER_FULFILLED, payload: FireStoreParser(response.data) });

                return dispatch(LeaderboardActions.getLeaderboard());
            } catch (error) {
                return dispatch({ type: GameActions.POST_CREATE_USER_REJECTED, payload: error });
            }
        };
    }

    /**
     * Dispatch an action to submit the selected answer.
     *
     * @param answer    the answer selected by the user.
     */
    public static submitAnswer(answer: string) {
        return async (dispatch: Function, getState: () => IStore) => {
            try {
                const actualAnswer = getState().question.answer.toLowerCase();
                const isRight = actualAnswer === answer.toLowerCase() ? "correct" : "incorrect";
                const { user } = getState().game;
                dispatch({ type: GameActions.PATCH_USER_SCORE_PENDING, payload: undefined });
                const response = await axios.patch("https://firestore.googleapis.com/v1/" + user.id, {
                    fields: {
                        name: { stringValue: user.name },
                        attempts: { integerValue: user.attempts + 1 },
                        score: { integerValue: isRight === "correct" ? user.score + 1 : user.score }
                    }
                });

                dispatch({ type: GameActions.PATCH_USER_SCORE_FULFILLED, payload: FireStoreParser(response.data) });
                return dispatch({ type: GameActions.SUBMIT_ANSWER, payload: isRight });
            } catch (error) {
                return dispatch({ type: GameActions.PATCH_USER_SCORE_REJECTED, payload: undefined });
            }
        };
    }
}
