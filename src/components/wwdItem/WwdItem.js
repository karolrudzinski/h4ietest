import React from "react";
import styles from "./wwdItem.module.less";
import Button from "../button/Button";

const WwdItem = ({ image, title, desc, btnLink, imageClass }) => (
  <li className={styles.wwdItem}>
    <img className={`${styles.wwdItemImg} ${imageClass}`} src={image} alt="" />
    <div className={styles.wwdItemInner}>
      <p className="sectionPara">{title}</p>
      <p className={styles.wwdItemDesc}>{desc}</p>
      <div className={styles.wwdItemButton}>
        <Button linkTo={btnLink} bordered>
          Learn More
        </Button>
      </div>
    </div>
  </li>
);
export default WwdItem;
