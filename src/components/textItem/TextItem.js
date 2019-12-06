import React from "react";
import styles from "./textItem.module.less";

const TextItem = ({ image, title, desc }) => (
  <div className={styles.textItem}>
    <div className={styles.textItemImgBox}>
      <img className={styles.textItemImg} src={image} alt=""></img>
    </div>
    <h3 className={styles.textItemTitle}>{title}</h3>
    <p className={styles.textItemDesc}>{desc}</p>
  </div>
);
export default TextItem;
