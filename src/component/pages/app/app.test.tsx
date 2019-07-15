import * as React from "react";
import { shallow } from "enzyme";

import App from "./app.layout";
import { IAppProps } from "./app.props.interface";
import { LeaderboardContainer } from "../../leaderboard/leaderboard.container";
import Button from "../../button/button.component";
import { GameContainer } from "../../game/game.container";

describe("Components", () => {
    describe("App", () => {
        let props: IAppProps = null;

        beforeEach(() => {
            props = {
                displayGameModal: false,
                startGame: null
            };
        });

        it("should render leaderboard", () => {
            const component = shallow(<App {...props} />);
            expect(component.find(LeaderboardContainer).length).toBe(1);
        });

        it("should render launch button", () => {
            const component = shallow(<App {...props} />);
            expect(component.find(Button).length).toBe(1);
        });

        it("should render game container modal when display game modal is true", () => {
            const component = shallow(<App {...props} displayGameModal />);
            expect(component.find(GameContainer).length).toBe(1);
        });

        it("should not render game container modal when display game modal is false", () => {
            const component = shallow(<App {...props} displayGameModal={false} />);
            expect(component.find(GameContainer).length).toBe(0);
        });

        it("should call start game when button is clicked", () => {
            const startGame = jest.fn();

            const component = shallow(<App {...props} startGame={startGame} />);
            component.find(Button).simulate("click");

            expect(startGame).toHaveBeenCalled();
        });
    });
});
