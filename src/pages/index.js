import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageBackground from "../components/pageBackground/PageBackground";
import PageHero from "../components/pageHero/PageHero";
import "../components/backgrounds.less";
import images from "../data/bgshapes.js";
import Section from "../components/section/Section";
import Project from "../components/project/Project";
import ProjectData from "../data/projects";

export default class IndexPage extends React.Component {
  // const IndexPage = () => (

  render() {
    return (
      <Layout>
        <SEO title="home" />
        <PageBackground page={"topMainBg"} shapes={"topMainMask"}>
          {images.main.map(item => (
            <img
              key={item.img}
              src={item.img}
              className={item.className}
              alt="background shape"
            />
          ))}
        </PageBackground>
        <PageHero
          buttonContainer
          heading={"We design successful web and mobile products"}
          description={
            "Research, ideation and high fidelity interactive prototyping."
          }
          buttonLeftText={"aaaaa"}
          buttonRightText={"bbbbbb"}
          containerWidth={"mainPage"}
        ></PageHero>

        <Section className={"projectSection"}>
          {ProjectData.slice(0, 4).map(item => (
            <Project
              side={item.side}
              key={item.projectName}
              projectName={item.projectName}
              cardName={item.cardName}
              maskName={item.maskName}
              projectDesc={item.projectDesc}
              logoName={item.logoName}
              projectPro={item.projectPro}
              imgSrc={item.imgSrc}
              caseStudy={item.caseStudy}
              bgSrc={item.bgSrc}
              bgSrc2={item.bgSrc2}
              bgClass={item.bgClass}
              bgClass2={item.bgClass2}
              animation={item.animation}
              bgAnimation1={item.bgAnimation1}
              bgAnimation2={item.bgAnimation2}
            ></Project>
          ))}
        </Section>
      </Layout>
      // );
    );
  }
}

// export default IndexPage;
