export interface IGameStatusProps extends IGameStatusStateProps, IGameStatusDispatchProps {}

export interface IGameStatusStateProps {
    /**
     * Whether the user's answer was correct or not.
     */
    isTheAnswerCorrect: boolean;

    /**
     * The correct answer.
     */
    correctAnswer: string;
}

export interface IGameStatusDispatchProps {
    /**
     * Dispatch an action to exit the game.
     */
    exitGame: () => void;

    /**
     * Dispatch an action to retrieve a new quesiton.
     */
    newQuestion: () => void;
}
