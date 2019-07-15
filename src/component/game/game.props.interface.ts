export interface IGameProps extends IGameStateProps, IGameDispatchProps {}

export interface IGameStateProps {
    /**
     * Tells the component what state the game is in.
     */
    state: "started" | "question" | "answer" | "ended";
}

export interface IGameDispatchProps {
    /**
     * Dispatch an action to close the modal.
     */
    onClose: () => void;
}
