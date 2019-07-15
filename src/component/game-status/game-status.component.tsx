import * as React from "react";
import classNames from "classnames";
import { IGameStatusProps } from "./game-status.props.interface";
import Button from "../button/button.component";

const styles = require("./game-status.module.css");

/**
 * Renders if the answer was correct or not
 */
export default class GameStatus extends React.Component<IGameStatusProps> {
    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { isTheAnswerCorrect: correctAnswer } = this.props;

        return (
            <div className={styles.wrapper}>
                {correctAnswer && this.renderCorrectAnswer()}
                {!correctAnswer && this.renderIncorrectAnswer()}
                <div className={styles.buttons}>
                    <Button text={"New Question"} onClick={this.newQuestion} type={"button"} />
                    <Button text={"Close"} onClick={this.close} type={"button"} className={styles.close_btn} />
                </div>
            </div>
        );
    }

    private renderCorrectAnswer(): JSX.Element {
        return (
            <div className={styles.inner_wrapper}>
                <h1>Correct!</h1>
                <div className={styles.circle}>
                    <div className={classNames(styles.checkmark, styles.draw)} />
                </div>
            </div>
        );
    }

    private renderIncorrectAnswer(): JSX.Element {
        const { correctAnswer } = this.props;

        return (
            <div className={styles.inner_wrapper}>
                <h1>Incorrect!</h1>
                <div className={styles.correct_answer}>{`The correct answer was: ${correctAnswer}`}</div>
                <div className={styles.circle}>
                    <div className={classNames(styles.cross, styles.draw)} />
                </div>
            </div>
        );
    }

    private newQuestion = () => this.props.newQuestion();

    private close = () => this.props.exitGame();
}
