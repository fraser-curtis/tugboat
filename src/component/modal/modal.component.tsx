import * as React from "react";
import classNames from "classnames/bind";

import { IModalProps } from "./modal.props.interface";

const styles = require("./modal.module.css");

/**
 * Modal wrapper for dashboard tiles
 */
export class Modal extends React.Component<IModalProps> {
    /**
     * Remove scroll bars from main page.
     */
    public componentDidMount(): void {
        const htmlElementStyle = document.getElementsByTagName("html")[0].style;
        htmlElementStyle.overflow = "hidden";
    }

    /**
     * Add scrollbars back in for main page.
     */
    public componentWillUnmount(): void {
        const htmlElementStyle = document.getElementsByTagName("html")[0].style;
        htmlElementStyle.overflow = "auto";
    }

    /**
     * Renders a single React Element to the DOM.
     */
    public render(): JSX.Element {
        const { children, onClose, className } = this.props;

        return (
            <div className={classNames(styles.container, className)}>
                <div className={styles.blocker} onClick={onClose} />
                <div className={styles.form_wrapper}>
                    <div className={styles.inner_form}>
                        <div className={styles.close} onClick={onClose} />
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
