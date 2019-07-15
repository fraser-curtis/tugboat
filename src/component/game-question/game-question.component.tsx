import * as React from "react";

import { IGameQuestionProps } from "./game-question.props.interface";
import { IGameQuestionState } from "./game-question.state.interface";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";

const styles = require("./game-question.module.css");

/**
 * Renders the question and the answer for the user.
 */
export default class GameQuestion extends React.Component<IGameQuestionProps, IGameQuestionState> {
    constructor(props: IGameQuestionProps) {
        super(props);

        this.state = {
            answer: ""
        };
    }

    public componentDidMount(): void {
        this.props.getQuestion();
    }

    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { answer } = this.state;
        const { loading } = this.props;

        if (loading) {
            return <Loader />;
        }

        return (
            <div>
                <h1 className={styles.header}>Question:</h1>
                <div className={styles.jeopardy_answer}>{this.props.question}</div>
                <div className={styles.answer}>Your Answer:</div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <div className={styles.row_item}>
                        <input name={"answer"} type="text" className={styles.input} placeholder="Answer" value={answer} required onChange={this.handleChange} />
                    </div>
                    <div className={styles.buttons}>
                        <Button type={"submit"} className={styles.button} text={"Submit Answer"} />
                    </div>
                </form>
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = event => {
        event.preventDefault();
        this.props.submitAnswer(this.state.answer);
    };
}
