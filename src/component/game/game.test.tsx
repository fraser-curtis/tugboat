import React from "react";
import { IGameProps } from "./game.props.interface";
import { shallow } from "enzyme";
import Game from "./game.component";
import { GameNameContainer } from "../game-name/game-name.container";
import { GameStatusContainer } from "../game-status/game-status.container";
import { GameQuestionContaner } from "../game-question/game-question.container";

describe("Game", () => {
    let props: IGameProps = null;

    beforeEach(() => {
        props = {
            onClose: null,
            state: "started"
        };
    });

    it("should render name container when state is 'started ", () => {
        const component = shallow(<Game {...props} />);

        const container = component.find(GameNameContainer);

        expect(container.length).toBe(1);
    });

    it("should render name container when state is 'started ", () => {
        const component = shallow(<Game {...props} state="question" />);

        const container = component.find(GameQuestionContaner);

        expect(container.length).toBe(1);
    });

    it("should render name container when state is 'started ", () => {
        const component = shallow(<Game {...props} state="answer" />);

        const container = component.find(GameStatusContainer);

        expect(container.length).toBe(1);
    });

    it("should call onClose when close is clicked", () => {
        const onClose = jest.fn();

        const component = shallow(<Game {...props} onClose={onClose} />);
        component.simulate("close");

        expect(onClose).toHaveBeenCalled();
    });
});
