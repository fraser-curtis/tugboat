import axios from "axios";
//@ts-ignore
import FireStoreParser from "firestore-parser";
import { FIRESTORE_ROOT } from "../../../constants/url.constants";

export default class LeaderboardActions {
    public static GET_LEADERBOARD = "leaderboard/GET_LEADERBOARD";
    public static GET_LEADERBOARD_PENDING = "leaderboard/GET_LEADERBOARD_PENDING";
    public static GET_LEADERBOARD_FULFILLED = "leaderboard/GET_LEADERBOARD_FULFILLED";
    public static GET_LEADERBOARD_REJECTED = "leaderboard/GET_LEADERBOARD_REJECTED";

    public static getLeaderboard(): any {
        return async (dispatch: Function) => {
            try {
                dispatch({ type: LeaderboardActions.GET_LEADERBOARD_PENDING, payload: undefined });
                const response = await axios.get(FIRESTORE_ROOT + "users");
                return dispatch({ type: LeaderboardActions.GET_LEADERBOARD_FULFILLED, payload: FireStoreParser(response.data) });
            } catch (error) {
                return dispatch({ type: LeaderboardActions.GET_LEADERBOARD_REJECTED, payload: error });
            }
        };
    }
}
