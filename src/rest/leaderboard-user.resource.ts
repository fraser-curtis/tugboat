export interface ILeaderboardUserResource {
    /**
     * Firestore ID of the user.
     */
    name: string;
    fields: {
        /**
         * The user's score.
         */
        score: number;

        /**
         * The number of attempts the user has taken.
         */
        attempts: number;

        /**
         * The user's name.
         */
        name: string;
    };
}
