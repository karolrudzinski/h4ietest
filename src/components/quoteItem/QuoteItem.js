import React from "react";
import styles from "./quoteItem.module.less";
import ScrollAnimation from "react-animate-on-scroll";

const QuoteItem = ({
  image,
  title,
  descText,
  lowerDesc,
  lowerDescText,
  animation
}) => (
  <ScrollAnimation
    className={styles.quoteItem}
    animateOnce
    offset={150}
    animateIn={animation}
  >
    <div className={styles.quoteInner}>
      <div className={styles.quoteImg}>
        <img src={image} alt="" />
      </div>
      <h3 className={styles.quoteHeading}>{title}</h3>
      <p className={styles.quoteSig}>{descText}</p>
      {lowerDesc ? <p className={styles.quoteSig}>{lowerDescText}</p> : false}
    </div>
  </ScrollAnimation>
);
export default QuoteItem;
