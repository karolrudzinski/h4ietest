import React from "react";
import styles from "./pageBackground.module.less";

const PageBackground = ({ children, page, shapes }) => {
  return (
    <div className={`${styles.topPageBg} ${page}`}>
      <div className={shapes}>{children}</div>
    </div>
  );
};

export default PageBackground;
