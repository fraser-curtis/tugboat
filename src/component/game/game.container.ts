import Game from "./game.component";
import { IGameStateProps, IGameDispatchProps } from "./game.props.interface";
import { IStore } from "../../state/stores/store.interface";
import { connect } from "react-redux";
import GameActions from "../../state/stores/game/game.actions";

export function mapStateToProps(state: IStore): IGameStateProps {
    return {
        state: state.game.state
    };
}

export function mapDispatchToProps(dispatch: any): IGameDispatchProps {
    return {
        onClose: () => {
            dispatch(GameActions.endGame());
        }
    };
}

export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
