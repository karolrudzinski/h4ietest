import React from "react";
import styles from "./textQuoteSection.module.less";

const TextQuoteSection = ({ children, quoteLeft }) => (
  <div className={`${styles.textQuoteSection} "wrapper"`}>
    {quoteLeft ? (
      <div className={styles.columnContainerRev}>{children}</div>
    ) : (
      <div className={styles.columnContainer}>{children}</div>
    )}
  </div>
);
export default TextQuoteSection;
