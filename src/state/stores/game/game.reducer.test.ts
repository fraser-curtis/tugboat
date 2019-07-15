import GameActions from "./game.actions";
import reduce from "./game.reducer";
import { IGame } from "./game.interface";
import { IHttpAction } from "../http-action.interface";
import { ILeaderboardUserResource } from "../../../rest/leaderboard-user.resource";

describe("Reducers", () => {
    describe("Game", () => {
        let initialState: IGame = null;

        it("should set state to started when starting game", () => {
            const action: IHttpAction<void> = {
                type: GameActions.START_GAME,
                payload: null
            };

            const newState = reduce(initialState, action);
            const expectedState: IGame = {
                state: "started"
            };

            expect(newState).toEqual(expectedState);
        });

        it("should set state to started when ending game", () => {
            const action: IHttpAction<void> = {
                type: GameActions.END_GAME,
                payload: null
            };

            const newState = reduce(initialState, action);
            const expectedState: IGame = {
                state: "ended"
            };

            expect(newState).toEqual(expectedState);
        });

        it("should set user when creating a user is fulfilled", () => {
            const action: IHttpAction<ILeaderboardUserResource> = {
                type: GameActions.POST_CREATE_USER_FULFILLED,
                payload: {
                    fields: {
                        attempts: 0,
                        name: "name",
                        score: 0
                    },
                    name: "id"
                }
            };

            const newState = reduce(initialState, action);
            const expectedState: IGame = {
                state: "question",
                user: {
                    attempts: 0,
                    name: "name",
                    score: 0,
                    id: "id"
                },
                creatingUser: false
            };

            expect(newState).toEqual(expectedState);
        });

        it("should update user when patching a user is fulfilled", () => {
            const newInitState: IGame = {
                creatingUser: false,
                state: "question",
                user: {
                    attempts: 0,
                    name: "name",
                    score: 0,
                    id: "id"
                }
            };

            const action: IHttpAction<ILeaderboardUserResource> = {
                type: GameActions.POST_CREATE_USER_FULFILLED,
                payload: {
                    fields: {
                        attempts: 2,
                        name: "name",
                        score: 1
                    },
                    name: "id"
                }
            };

            const newState = reduce(newInitState, action);
            const expectedState: IGame = {
                state: "question",
                user: {
                    attempts: 2,
                    name: "name",
                    score: 1,
                    id: "id"
                },
                creatingUser: false
            };

            expect(newState).toEqual(expectedState);
        });
    });
});
