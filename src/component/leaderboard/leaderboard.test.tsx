import * as React from "react";
import { shallow } from "enzyme";

import Leaderboard from "./leaderboard.component";
import { ILeaderboardProps } from "./leaderboard.props.interface";
import Loader from "../loader/loader.component";
import { ILeaderboardUser } from "../../state/stores/leaderboard/leaderboard-user.interface";

describe("Components", () => {
    describe("Leaderboard", () => {
        let props: ILeaderboardProps = null;

        beforeEach(() => {
            props = {
                getLeaderboard: jest.fn(),
                loading: false,
                users: []
            };
        });

        it("should render loader when loading", () => {
            const component = shallow(<Leaderboard {...props} loading />);

            expect(component.find(Loader).length).toBe(1);
        });

        it("should render two user rows", () => {
            const user1: ILeaderboardUser = {
                attempts: 0,
                id: "id",
                name: "name",
                score: 1
            };
            const user2: ILeaderboardUser = {
                attempts: 0,
                id: "id",
                name: "name",
                score: 1
            };

            const component = shallow(<Leaderboard {...props} users={[user1, user2]} />);

            expect(component.find(".leaderboard__user_row").length).toBe(2);
        });
    });
});
