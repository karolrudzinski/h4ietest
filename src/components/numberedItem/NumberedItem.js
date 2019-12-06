import React from "react";
import styles from "./numberedItem.module.less";
import ScrollAnimation from "react-animate-on-scroll";

const NumberedItem = ({ image, title, desc, itemNum }) => (
  <li className={styles.numberedItem}>
    <ScrollAnimation
      className={styles.itemLeft}
      animateOnce
      offset={150}
      animateIn="bounceInLeft"
    >
      <img className={styles.numberedItemImg} src={image} alt="" />
    </ScrollAnimation>
    <div className={styles.itemRight}>
      <div className={styles.itemRightInner}>
        <p className={styles.numberedItemCount}>{itemNum}</p>
        <div className={styles.itemRightText}>
          <h3 className="stdTitle">{title}</h3>
          <p className="stdText">{desc}</p>
        </div>
      </div>
    </div>
  </li>
);
export default NumberedItem;
