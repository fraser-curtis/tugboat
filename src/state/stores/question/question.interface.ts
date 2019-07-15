export interface IQuestion {
    /**
     * The question to be answered.
     */
    question?: string;

    /**
     * The answer to the current question.
     */
    answer?: string;

    /**
     * Currently loading the question/answer?
     */
    loading?: boolean;
}
