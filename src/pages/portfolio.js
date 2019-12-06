import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageBackground from "../components/pageBackground/PageBackground";
import PageHero from "../components/pageHero/PageHero";
import "../components/backgrounds.less";
import images from "../data/bgshapes.js";
import Project from "../components/project/Project";
import ProjectData from "../data/projects";
import Section from "../components/section/Section";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PageBackground page={"topPortfolioBg"} shapes={"topPortfolioMask"}>
      {images.portfolio.map(item => (
        <img
          key={item.img}
          src={item.img}
          className={item.className}
          alt="background shape"
        />
      ))}
    </PageBackground>
    <PageHero
      heading={`Vision, discovery, creation, development. We bring great ideas to life`}
      description={"Here's a showcase of our recent projects:"}
    ></PageHero>
    <Section className={"projectSection"}>
      {ProjectData.map(item => (
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
      a
    </Section>
  </Layout>
);

export default Portfolio;
