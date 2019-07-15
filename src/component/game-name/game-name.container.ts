import { connect } from "react-redux";

import GameName from "./game-name.component";
import { IGameNameStateProps, IGameNameDispatchProps } from "./game-name.props.interface";
import { IStore } from "../../state/stores/store.interface";
import GameActions from "../../state/stores/game/game.actions";

export function mapStateToProps(state: IStore): IGameNameStateProps {
    return {
        loading: state.game.creatingUser
    };
}

export function mapDispatchToProps(dispatch: any): IGameNameDispatchProps {
    return {
        createUser: (name: string) => {
            dispatch(GameActions.createUser(name));
        }
    };
}

export const GameNameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameName);
