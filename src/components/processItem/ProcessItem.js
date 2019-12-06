import React from "react";
import styles from "./processItem.module.less";

const ProcessItem = ({
  title,
  desc,
  fill,
  shapeId,
  shapeId2,
  titleColor,
  itemClass,
  stroke,
  ...props
}) => (
  <div className={styles.processItem} {...props}>
    <div className={`${styles.animatedCircle} ${itemClass}`}>
      <svg width="36" height="36" className={styles.firstHalf}>
        <g>
          <circle
            id={shapeId}
            cx="18"
            cy="18"
            r="16.5"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            fill="none"
          />
          <circle
            class="bubbeIcon"
            id="shape44"
            cx="18"
            cy="18"
            r="5"
            fill={fill}
          />
        </g>
      </svg>
      <svg width="36" height="36" className={styles.secondHalf}>
        <g>
          <circle
            id={shapeId2}
            cx="18"
            cy="18"
            r="16.5"
            strokeWidth="3"
            stroke={stroke}
            strokeDasharray="1000"
            strokeDashoffset="0"
            fill="none"
          />
        </g>
      </svg>
    </div>
    <div className={styles.processTextContainer}>
      <p style={{ color: titleColor }} className={styles.processTitle}>
        {title}
      </p>
      <p className={styles.processDesc}>{desc}</p>
    </div>
  </div>
);
export default ProcessItem;
