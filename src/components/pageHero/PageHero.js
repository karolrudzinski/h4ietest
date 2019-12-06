import React from "react";
import styles from "./pageHero.module.less";
import "./pageHero.less";

import Button from "../button/Button";

const Banner = ({ heading, description, buttonContainer, containerWidth }) => {
  return (
    <section className={`${styles.topSection} ${styles.wrapper}`}>
      <div className={`${styles.topSectionWrapper} ${containerWidth}`}>
        <h1 className="mainPrimaryHeading">{heading}</h1>
        <p className="sectionPara">{description}</p>
        {buttonContainer === true ? (
          <div className={styles.btnContainer}>
            <Button sizeL linkTo bordered>
              See Testimonials
            </Button>
            <Button sizeL linkTo text={"Get in touch"}></Button>
          </div>
        ) : (
          false
        )}
      </div>
    </section>
  );
};

export default Banner;
