import { connect } from "react-redux";

import GameQuestion from "./game-question.component";
import { IGameQuestionStateProps, IGameQuestionDispatchProps } from "./game-question.props.interface";
import { IStore } from "../../state/stores/store.interface";
import QuestionActions from "../../state/stores/question/question.actions";
import GameActions from "../../state/stores/game/game.actions";

export function mapStateToProps(state: IStore): IGameQuestionStateProps {
    return {
        question: state.question.question,
        loading: state.question.loading
    };
}

export function mapDispatchToProps(dispatch: any): IGameQuestionDispatchProps {
    return {
        getQuestion: () => {
            dispatch(QuestionActions.getQuestion());
        },
        submitAnswer: (answer: string) => {
            dispatch(GameActions.submitAnswer(answer));
        }
    };
}

export const GameQuestionContaner = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameQuestion);
