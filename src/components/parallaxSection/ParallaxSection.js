import React from "react";
import Section from "../section/Section";
import styles from "./parallaxSection.module.less";
import desfirstplan from "../../images/parallaxsection/design/d1plan2.png";
import dessecondplan from "../../images/parallaxsection/design/d2plan.png";
import designshape from "../../images/parallaxsection/design/sketch.png";
import devfirstplan from "../../images/parallaxsection/development/1plan2.png";
import devsecondplan from "../../images/parallaxsection/development/2plan.png";
import swift from "../../images/parallaxsection/development/swift.png";
import react from "../../images/parallaxsection/development/react.png";
import python from "../../images/parallaxsection/development/python.png";
import node from "../../images/parallaxsection/development/node.png";
import d3 from "../../images/parallaxsection/development/d3.png";
import gatsby from "../../images/parallaxsection/development/gatsby.png";

const ParallaxSection = ({ design }) =>
  design ? (
    <Section className={"parallaxSection"}>
      <div className={styles.parallaxContainer}>
        <img src={desfirstplan} className={styles.designFirstPlan} alt="" />
        <img src={dessecondplan} className={styles.designSecondPlan} alt="" />
        <img src={designshape} className={styles.parallaxIconSketch} alt="" />
      </div>
    </Section>
  ) : (
    <Section className={"parallaxSection"}>
      <div className={styles.parallaxContainer}>
        <img src={devfirstplan} className={styles.devFirstPlan} alt="" />
        <img src={devsecondplan} className={styles.devSecondPlan} alt="" />
        <img src={swift} className={styles.parallaxIconSwift} alt="" />
        <img src={react} className={styles.parallaxIconReact} alt="" />
        <img src={python} className={styles.parallaxIconPython} alt="" />
        <img src={node} className={styles.parallaxIconNode} alt="" />
        <img src={d3} className={styles.parallaxIconD3} alt="" />
        <img src={gatsby} className={styles.parallaxIconGatsby} alt="" />
      </div>
    </Section>
  );

export default ParallaxSection;
