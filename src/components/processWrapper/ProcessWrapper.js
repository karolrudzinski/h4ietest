import React from "react";
import styles from "./processWrapper.module.less";

const ProcessWrapper = ({ children, openModalFn }) => (
  <div className={styles.processContainer}>
    <div className={styles.processLine}></div>
    <div className={styles.processInner}>{children}</div>
  </div>
);
export default ProcessWrapper;
