import React from "react";
import styles from "./section.module.less";

const Section = ({
  main,
  title,
  titleText,
  desc,
  descText,
  className,
  children,
  noPad
}) => (
  <section className={className}>
    {/* <div className={noPad ? styles.sectionWrapNoPad : styles.sectionWrap}> */}
    <div className={`${noPad ? styles.sectionWrapNoPad : styles.sectionWrap}`}>
      {title ? (
        main ? (
          <h2 className="mainSectionHeading">{titleText}</h2>
        ) : (
          <h2 className="sectionHeading">{titleText}</h2>
        )
      ) : (
        false
      )}
      {desc ? <p className="sectionDescription">{descText}</p> : false}

      {children}
    </div>
  </section>
);
export default Section;
