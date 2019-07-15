import * as React from "react";
import { IAppProps } from "./app.props.interface";
import { LeaderboardContainer } from "../../leaderboard/leaderboard.container";
import { GameContainer } from "../../game/game.container";
import Button from "../../button/button.component";

const styles = require("./app.module.css");

/**
 * The main layout for the app.
 */
export default class App extends React.Component<IAppProps> {
    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { displayGameModal } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.content}>
                    <LeaderboardContainer />
                    <Button onClick={this.startGame} text={"Start Game"} type={"button"} />
                    {displayGameModal && <GameContainer />}
                </div>
            </div>
        );
    }

    private startGame = (): void => this.props.startGame();
}
