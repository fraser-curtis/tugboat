import { ILeaderboardUser } from "./leaderboard-user.interface";

export interface ILeaderboard {
    /**
     * List of users for the leaderboard.
     */
    users?: ILeaderboardUser[];

    /**
     * Whether the leaderboard is loading.
     */
    loadingState?: boolean;
}
