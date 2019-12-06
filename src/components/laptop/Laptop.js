import React from "react";
import styles from "./laptop.module.less";

const Laptop = ({ animated }) =>
  animated ? (
    <div className={styles.csLaptop}>
      <div className={styles.quoteInner}></div>
    </div>
  ) : (
    <div className={styles.dsLaptop}>
      <div className={styles.dsLaptopScreen1}></div>
    </div>
  );
export default Laptop;
