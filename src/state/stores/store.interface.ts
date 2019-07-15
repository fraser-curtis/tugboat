import { ILeaderboard } from "./leaderboard/leaderboard.interface";
import { IGame } from "./game/game.interface";
import { IQuestion } from "./question/question.interface";

/**
 * The representation of the store.
 */
export interface IStore {
    leaderboards: ILeaderboard;
    game: IGame;
    question: IQuestion;
}
