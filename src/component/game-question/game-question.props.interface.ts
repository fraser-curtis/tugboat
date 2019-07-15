export interface IGameQuestionProps extends IGameQuestionStateProps, IGameQuestionDispatchProps {}

export interface IGameQuestionStateProps {
    /**
     * The value of the question.
     */
    question: string;

    /**
     * Is it loading the question.
     */
    loading: boolean;
}

export interface IGameQuestionDispatchProps {
    /**
     * Dispatch an action to retrieve the question.
     */
    getQuestion: () => void;

    /**
     * Dispatch an action to check the answer.
     */
    submitAnswer: (answer: string) => void;
}
