import React from "react";
import styles from "./menuLogo.module.less";
import { Link } from "gatsby";

const MenuLogo = ({ footer, header }) =>
  header ? (
    <div className={styles.logoContainer}>
      <Link href="/" className="linkDiv" />
      <div className={styles.logo}></div>
    </div>
  ) : footer ? (
    <div className={styles.logoContainerFooter}>
      <Link href="/" className="linkDiv" />
      <div className={styles.logo}></div>
    </div>
  ) : (
    false
  );

export default MenuLogo;
