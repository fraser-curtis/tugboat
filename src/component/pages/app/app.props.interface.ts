export interface IAppProps extends IAppStateProps, IAppDispatchProps {}

export interface IAppStateProps {
    /**
     * Should the game modal be displayed.
     */
    displayGameModal: boolean;
}

export interface IAppDispatchProps {
    /**
     * Dispatch an action to start the game.
     */
    startGame: () => void;
}
