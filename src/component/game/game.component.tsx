import * as React from "react";

import { IGameProps } from "./game.props.interface";
import { Modal } from "../modal/modal.component";
import { GameNameContainer } from "../game-name/game-name.container";
import { GameQuestionContaner } from "../game-question/game-question.container";
import { GameStatusContainer } from "../game-status/game-status.container";

const styles = require("./game.module.css");

/**
 * Renders the wrapper for the game modal.
 */
export default class Game extends React.Component<IGameProps> {
    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { state } = this.props;

        return (
            <Modal onClose={this.onClose}>
                <div className={styles.game_wrapper}>
                    {state === "started" && <GameNameContainer />}
                    {state === "question" && <GameQuestionContaner />}
                    {state === "answer" && <GameStatusContainer />}
                </div>
            </Modal>
        );
    }

    private onClose = () => this.props.onClose();
}
