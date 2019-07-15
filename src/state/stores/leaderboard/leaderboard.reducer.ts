import { ILeaderboard } from "./leaderboard.interface";
import LeaderboardActions from "./leaderboard.actions";
import { Reducer } from "redux";
import { IHttpAction } from "../http-action.interface";
import { ILeaderboardResource } from "../../../rest/leaderboard.resource.interface";
import { ILeaderboardUser } from "./leaderboard-user.interface";

const reducer: Reducer<ILeaderboard> = (state: ILeaderboard = {}, action?) => {
    switch (action.type) {
        case LeaderboardActions.GET_LEADERBOARD_FULFILLED: {
            const { payload } = action as IHttpAction<ILeaderboardResource>;

            const users: ILeaderboardUser[] = payload.documents
                .map(c => {
                    return {
                        name: c.fields.name,
                        attempts: c.fields.attempts,
                        score: c.fields.score,
                        id: c.name
                    };
                })
                .sort((a, b) => b.score - a.score);

            return {
                users,
                loadingState: false
            };
        }
        case LeaderboardActions.GET_LEADERBOARD_PENDING: {
            return {
                ...state,
                loadingState: true
            };
        }
        case LeaderboardActions.GET_LEADERBOARD_REJECTED: {
            return {
                ...state,
                loadingState: false
            };
        }
    }

    return state;
};

export default reducer;
