import React from "react";
import styles from "./project.module.less";
import "./project.less";
import { Link } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";

const Project = ({
  side,
  projectName,
  cardName,
  maskName,
  projectDesc,
  logoName,
  imgSrc,
  liveLink,
  caseStudy,
  bgSrc,
  bgSrc2,
  bgClass,
  bgClass2,
  animation,
  bgAnimation1,
  bgAnimation2
}) => (
  <>
    <li
      className={`${styles.projectItem} ${projectName} ${
        side === "right" ? styles.projectItemRight : styles.projectItemLeft
      }`}
    >
      <div className={`${styles.projectItemCard} ${cardName}`}>
        <div className={`${styles.projectLogo} ${logoName}`}></div>
        <p className={styles.projectDesc}>{projectDesc}</p>
        <div className={styles.projectLinkContainer}>
          <a className={styles.projectLink} href={liveLink}>
            see it live
          </a>
          <Link className={styles.projectLink} to={caseStudy}>
            see case study
          </Link>
        </div>
      </div>
      <ScrollAnimation
        animateOnce
        offset={150}
        animateIn={animation}
        className={maskName}
      >
        <img className={styles.projectPro} src={imgSrc} alt="" />
        <ScrollAnimation
          animateOnce
          offset={150}
          animateIn={bgAnimation1}
          className={bgClass}
          delay={200}
        >
          <img src={bgSrc} />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          offset={150}
          animateIn={bgAnimation2}
          className={bgClass2}
          alt=""
          delay={200}
        >
          <img src={bgSrc2} alt="" />
        </ScrollAnimation>
      </ScrollAnimation>
    </li>
  </>
);
export default Project;
