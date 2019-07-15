import { connect } from "react-redux";

import leaderboard from "./leaderboard.component";
import { ILeaderboardStateProps, ILeaderboardDispatchProps } from "./leaderboard.props.interface";
import { IStore } from "../../state/stores/store.interface";
import LeaderboardActions from "../../state/stores/leaderboard/leaderboard.actions";
import { Dispatch } from "redux";

export function mapStateToProps(state: IStore): ILeaderboardStateProps {
    return {
        users: state.leaderboards.users,
        loading: state.leaderboards.loadingState
    };
}

export function mapDispatchToProps(dispatch: Dispatch): ILeaderboardDispatchProps {
    return {
        getLeaderboard: () => dispatch(LeaderboardActions.getLeaderboard())
    };
}

export const LeaderboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(leaderboard);
