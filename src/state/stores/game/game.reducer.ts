import { Reducer } from "redux";
import { IGame } from "./game.interface";
import GameActions from "./game.actions";
import { ILeaderboardUserResource } from "../../../rest/leaderboard-user.resource";
import { ILeaderboardUser } from "../leaderboard/leaderboard-user.interface";
import QuestionActions from "../question/question.actions";

const reducer: Reducer<IGame> = (state: IGame = {}, action?) => {
    switch (action.type) {
        case GameActions.START_GAME: {
            return {
                state: "started"
            };
        }
        case GameActions.END_GAME: {
            return {
                state: "ended"
            };
        }
        case GameActions.SUBMIT_ANSWER: {
            const isRight = action.payload as "correct" | "incorrect";

            return {
                ...state,
                questionStatus: isRight,
                state: "answer"
            };
        }
        case GameActions.POST_CREATE_USER_PENDING: {
            return {
                ...state,
                creatingUser: true
            };
        }
        case GameActions.POST_CREATE_USER_FULFILLED: {
            const user = action.payload as ILeaderboardUserResource;

            const leaderboardUser: ILeaderboardUser = {
                name: user.fields.name,
                attempts: user.fields.attempts,
                id: user.name,
                score: user.fields.score
            };

            return {
                ...state,
                state: "question",
                creatingUser: false,
                user: leaderboardUser
            };
        }
        case QuestionActions.GET_QUESTION_FULFILLED: {
            return {
                ...state,
                state: "question"
            };
        }
        case GameActions.POST_CREATE_USER_REJECTED: {
            return {
                ...state,
                creatingUser: false
            };
        }
        case GameActions.PATCH_USER_SCORE_FULFILLED: {
            const user = action.payload as ILeaderboardUserResource;

            const leaderboardUser: ILeaderboardUser = {
                name: user.fields.name,
                attempts: user.fields.attempts,
                id: user.name,
                score: user.fields.score
            };

            return {
                ...state,
                user: leaderboardUser
            };
        }
    }

    return state;
};

export default reducer;
