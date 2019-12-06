import React from "react";
import styles from "./button.module.less";
import { Link } from "gatsby";
import arrowpink from "../../images/arrows/btnarrowpink.svg";
import arrowwhite from "../../images/arrows/btnarrow.svg";

const Button = ({ text, bordered, linkTo, sizeL }) => (
  <>
    {linkTo ? (
      bordered ? (
        <div
          className={`${styles.btnBordered} ${
            sizeL ? styles.btnL : styles.btnM
          }`}
        >
          <div className={styles.btnMask}>
            <span className={styles.btnBorderedText}>
              See Testimonials
              <img className={styles.arrow} src={arrowpink} alt="" />
            </span>
            <Link to={linkTo} className="linkDiv"></Link>
          </div>
        </div>
      ) : (
        <Link
          to={linkTo}
          className={`${styles.btnGradient} ${
            sizeL ? styles.btnL : styles.btnM
          }`}
        >
          {text}
          <img className={styles.arrow} src={arrowwhite} alt="" />
        </Link>
      )
    ) : (
      <button
        type={"submit"}
        className={`${styles.btnGradient} ${sizeL ? styles.btnL : styles.btnM}`}
      >
        {text}
      </button>
    )}
  </>
);
export default Button;
