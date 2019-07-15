import * as React from "react";
import classNames from "classnames";

import { ILeaderboardProps } from "./leaderboard.props.interface";
import { ILeaderboardUser } from "../../state/stores/leaderboard/leaderboard-user.interface";
import Loader from "../loader/loader.component";

const styles = require("./leaderboard.module.css");

/**
 * Renders a leaderboard.
 */
export default class Leaderboard extends React.Component<ILeaderboardProps> {
    public componentDidMount(): void {
        this.props.getLeaderboard();
    }

    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { users, loading } = this.props;

        if (!users) {
            return null;
        }

        if (loading) {
            return <Loader />;
        }

        return (
            <div className={styles.outer_wrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.user_row}>
                        <div>Username</div>
                        <div className={styles.row_scores}>
                            <div>Score</div>
                            <div>Attempts</div>
                        </div>
                    </div>
                    {users.map(this.renderRow)}
                </div>
            </div>
        );
    }

    private renderRow(user: ILeaderboardUser): JSX.Element {
        return (
            <div className={classNames(styles.user_row, "leaderboard__user_row")} key={user.id}>
                <div>{user.name}</div>
                <div className={styles.row_scores}>
                    <div>{user.score}</div>
                    <div>{user.attempts}</div>
                </div>
            </div>
        );
    }
}
