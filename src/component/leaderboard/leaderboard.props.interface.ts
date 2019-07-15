import { ILeaderboardUser } from "../../state/stores/leaderboard/leaderboard-user.interface";

export interface ILeaderboardProps extends ILeaderboardStateProps, ILeaderboardDispatchProps {}

export interface ILeaderboardOwnProps {}

export interface ILeaderboardStateProps {
    /**
     * The users on the leaderboard.
     */
    users?: ILeaderboardUser[];

    /**
     * Is the leaderboard loading?
     */
    loading: boolean;
}

export interface ILeaderboardDispatchProps {
    /**
     * Dispatch an action to retreive the leaderboard.
     */
    getLeaderboard: () => void;
}
