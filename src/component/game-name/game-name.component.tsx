import * as React from "react";

import { IGameNameProps } from "./game-name.props.interface";
import { IGameNameState } from "./game-name.state.interface";
import Button from "../button/button.component";

const styles = require("./game-name.module.css");

/**
 * Renders the area to create your user name for the game.
 */
export default class GameName extends React.Component<IGameNameProps, IGameNameState> {
    /**
     * Creates a new instance of GameName.
     */
    constructor(props: IGameNameProps) {
        super(props);

        this.state = {
            name: ""
        };
    }

    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { name } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <h1 className={styles.header}>Time To Play!</h1>

                <div className={styles.row_item}>
                    <label>Please enter your name:</label>
                    <input name={"name"} type="text" className={styles.input} placeholder="Name" value={name} required onChange={this.handleChange} />
                </div>
                <div className={styles.buttons}>
                    <Button type={"submit"} text={"Start"} className={styles.button} loading={this.props.loading} />
                </div>
            </form>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = event => {
        event.preventDefault();
        this.props.createUser(this.state.name);
    };
}
