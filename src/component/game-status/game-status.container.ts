import { connect } from "react-redux";

import GameStatus from "./game-status.component";
import { IGameStatusStateProps, IGameStatusDispatchProps } from "./game-status.props.interface";
import { IStore } from "../../state/stores/store.interface";
import GameActions from "../../state/stores/game/game.actions";
import QuestionActions from "../../state/stores/question/question.actions";
import LeaderboardActions from "../../state/stores/leaderboard/leaderboard.actions";

export function mapStateToProps(state: IStore): IGameStatusStateProps {
    return {
        isTheAnswerCorrect: state.game.questionStatus === "correct",
        correctAnswer: state.question.answer
    };
}

export function mapDispatchToProps(dispatch: any): IGameStatusDispatchProps {
    return {
        exitGame: () => dispatch(GameActions.endGame()),
        newQuestion: () => {
            dispatch(LeaderboardActions.getLeaderboard());
            return dispatch(QuestionActions.getQuestion());
        }
    };
}

export const GameStatusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStatus);
