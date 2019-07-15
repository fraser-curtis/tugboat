import { connect } from "react-redux";

import App from "./app.layout";
import { IAppStateProps, IAppDispatchProps } from "./app.props.interface";
import { IStore } from "../../../state/stores/store.interface";
import GameActions from "../../../state/stores/game/game.actions";

export function mapStateToProps(state: IStore): IAppStateProps {
    return {
        displayGameModal: state.game.state !== "ended"
    };
}

export function mapDispatchToProps(dispatch: any): IAppDispatchProps {
    return {
        startGame: () => {
            dispatch(GameActions.startGame());
        }
    };
}

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
