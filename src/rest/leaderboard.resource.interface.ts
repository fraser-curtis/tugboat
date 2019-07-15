import { ILeaderboardUserResource } from "./leaderboard-user.resource";

export interface ILeaderboardResource {
    /**
     * List of users.
     */
    documents: Array<ILeaderboardUserResource>;
}
