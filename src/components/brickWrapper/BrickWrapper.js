import React from "react";
import styles from "./brickWrapper.module.less";

const BrickWrapper = ({ children }) => (
  <div className={styles.brickWrapper}>
    <div className={styles.brickWrapperInner}>{children}</div>
  </div>
);
export default BrickWrapper;
