import React from "react";
import styles from "./brickItem.module.less";

const BrickItem = ({ text, ...props }) => (
  <li className={styles.brickItem} {...props}>
    <div className={styles.brickText}>{text}</div>
  </li>
);
export default BrickItem;
