import React from "react";
import styles from "./testiTop.module.less";

const TestiTop = ({}) => (
  <div className={styles.columnContainer}>
    <div className={styles.col400}>
      <h2 className={styles.halfSectionHeading}>
        “Partner with Hype4 for a&nbsp;guaranteed, long -term digital success.”
      </h2>
    </div>
    <div className={styles.col680}>
      <div className={styles.testiTopCard}>
        <div className={styles.testiTopCardInner}>
          <div className={styles.testiBgAnalizy}></div>
          <p className={styles.cardQuote}>
            "The team's outstanding responsiveness have led to a long-term
            engagement. We've found that they are truly a
            <span>result-driven</span>
            partner."
          </p>
          <div className={styles.sigContainer}>
            <p className={styles.clientSig}>
              Dorota Pietrza, Director of Marketing at
              <span className="textPurple"> Analizy Online</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestiTop;
