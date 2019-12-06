import React from "react";
import styles from "./estimateSection.module.less";
import "../backgrounds.less";
import Button from "../button/Button";
import images from "../../data/bgshapes";

// import filutHc from "../../images/filuty/line4.png";
// import filutHtml from "../../images/filuty/html.svg";
// import filutLine from "../../images/filuty/as_4.svg";
// import filutCircle from "../../images/filuty/as_5.svg";
// import filutSnakeLeft from "../../images/filuty/as_7.svg";

const EstimateSection = () => (
  <div className={styles.estimateContainer}>
    <div className={styles.estimateBg}>
      <div className="bottomEstimateMask">
        {images.estimate.map(item => (
          <img
            key={item.img}
            src={item.img}
            className={item.className}
            alt="background shape"
          />
        ))}
      </div>
    </div>

    <section className={`${styles.estimateSection} ${"wrapper"}`}>
      <h2 className="mainSectionHeading">Get project estimation in 48h</h2>
      <div className={styles.estimateWrap}>
        <p className="sectionDescription">
          We will provide you with your project’s development time and cost
          within two business days
        </p>
      </div>
      <Button sizeL linkTo text={"Estimate project"}></Button>
    </section>
  </div>
);

export default EstimateSection;
