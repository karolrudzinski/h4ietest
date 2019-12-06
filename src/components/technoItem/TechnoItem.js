import React from "react";
import styles from "./technoItem.module.less";

const TechnoItem = ({ image, title, desc }) => (
  <li className={styles.technoItem}>
    <div className={styles.technoLogo}>
      <img src={image} alt=""></img>
    </div>
    <div className={styles.technoInfo}>
      <p className={styles.technoTitle}>{title}</p>
      <p className={styles.technoDesc}>{desc}</p>
    </div>
  </li>
);
export default TechnoItem;
