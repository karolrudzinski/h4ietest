import React from "react";
import styles from "./customModal.module.less";

const CustomModal = ({ children }) => (
  <div className={styles.modalWrap}>
    <div className={styles.modalHeader}>
      <span className={styles.modalHeaderText}>aaaaaaaa</span>
    </div>

    <div className={styles.modalBody}>
      <p className={styles.modalDesc}>
        Good news! We can help. Please provide us with your contact info, we’ll
        get back to you shortly.
      </p>
      {children}
    </div>
  </div>
);

export default CustomModal;
