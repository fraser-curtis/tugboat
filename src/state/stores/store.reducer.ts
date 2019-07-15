import { combineReducers, Reducer } from "redux";
import leaderboardReducer from "./leaderboard/leaderboard.reducer";
import gameReducer from "./game/game.reducer";
import questionReducer from "./question/question.reducer";
import { IStore } from "./store.interface";

/**
 * Combine all reducers so you can use actions against them.
 */
export const reducers: Reducer<IStore> = combineReducers<IStore>({
    leaderboards: leaderboardReducer,
    game: gameReducer,
    question: questionReducer
});
