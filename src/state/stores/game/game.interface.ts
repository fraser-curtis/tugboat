import { ILeaderboardUser } from "../leaderboard/leaderboard-user.interface";

export interface IGame {
    /**
     * Which state the game is currently in.
     */
    state?: "started" | "question" | "answer" | "ended";

    /**
     * The info of the user currently playing.
     */
    user?: ILeaderboardUser;

    /**
     * Was the question answered correctly or not.
     */
    questionStatus?: "correct" | "incorrect";

    /**
     * Is the user currently being created.
     */
    creatingUser?: boolean;
}
