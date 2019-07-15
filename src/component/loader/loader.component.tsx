import * as React from "react";

const styles = require("./loader.module.css");

/**
 * Renders a loader
 */
const Loader: React.FunctionComponent = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.circle_loading} />
        </div>
    );
};

export default Loader;
