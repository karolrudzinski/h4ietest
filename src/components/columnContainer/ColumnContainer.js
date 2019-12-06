import React from "react";
import styles from "./columnContainer.module.less";

const ColumnContainer = ({ children, reverse }) => (
  <div className={styles.textQuoteSection}>
    {reverse ? (
      <div className={styles.columnContainerRev}>{children}</div>
    ) : (
      <div className={styles.columnContainer}>{children}</div>
    )}
  </div>
);
export default ColumnContainer;
