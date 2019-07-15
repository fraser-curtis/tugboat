import * as React from "react";

import { IButtonProps } from "./button.props.interface";
import classNames from "classnames";

const styles = require("./button.module.css");

/**
 * Render button component.
 */
const Button = (props: IButtonProps): JSX.Element => {
    const { loading, text, disabled } = props;

    return (
        <button type={props.type} disabled={loading || disabled} className={classNames(styles.btn, styles.waves, props.className)} onClick={props.onClick} onSubmit={props.onSubmit}>
            {loading && <div className={styles.loader} />}
            {!loading && text}
        </button>
    );
};

export default Button;
