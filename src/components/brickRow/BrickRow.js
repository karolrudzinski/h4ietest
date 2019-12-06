import React from "react";
import styles from "./brickRow.module.less";

const BrickRow = ({ children }) => (
  <div className={styles.brickRow}>
    <div className={styles.brickRowInner}>{children}</div>
  </div>
);
export default BrickRow;
