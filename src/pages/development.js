import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageBackground from "../components/pageBackground/PageBackground";
import PageHero from "../components/pageHero/PageHero";
import "../components/backgrounds.less";
import "../less/development.less";
import images from "../data/bgshapes.js";
import techno from "../data/techno";
import TechnoItem from "../components/technoItem/TechnoItem";
import TextItem from "../components/textItem/TextItem";
import QuoteItem from "../components/quoteItem/QuoteItem";
import devItemImg1 from "../images/textItems/pc.svg";
import devItemImg2 from "../images/textItems/phone.svg";
import faceBrian from "../images/faces/brian.png";
import Section from "../components/section/Section";
import ColumnContainer from "../components/columnContainer/ColumnContainer";
import ParallaxSection from "../components/parallaxSection/ParallaxSection";
import ProcessItem from "../components/processItem/ProcessItem";
import processData from "../data/processData";
import ProcessWrapper from "../components/processWrapper/ProcessWrapper";
import BrickWrapper from "../components/brickWrapper/BrickWrapper";
import BrickItem from "../components/brickItem/BrickItem";
import BrickRow from "../components/brickRow/BrickRow";
import brickData from "../data/brickData";
import Project from "../components/project/Project";
import ProjectData from "../data/projects";

export default class Development extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    function filterByPage(item) {
      if (item.page == "development") {
        return true;
      }
    }

    let projectByPage = ProjectData.filter(filterByPage);
    return (
      <Layout>
        <SEO title="development" />
        <PageBackground page={"topDevBg"} shapes={"topDevMask"}>
          {images.dev.map(item => (
            <img
              key={item.img}
              src={item.img}
              className={item.className}
              alt="background shape"
            />
          ))}
        </PageBackground>
        <PageHero
          heading={"High quality, scalable web and mobile solutions."}
          description={
            "We plan, build, test and deliver software that enhances your digital presence"
          }
          containerWidth={"heroDevelopment"}
        ></PageHero>
        <ParallaxSection></ParallaxSection>

        <Section className={"textQuoteSection"}>
          <ColumnContainer>
            <div className="textContainer">
              <TextItem
                image={devItemImg1}
                title={"Web Development"}
                desc="We excell in both large, complex portals and smaller, campaign landing pages. Each project needs to load fast, be pixel-perfect and user friendly. Consistency and high execution quality are based on our unique process, in which front-end is coded by developers understanding the principles of UX and design."
              ></TextItem>
              <TextItem
                image={devItemImg2}
                title={"Mobile Development"}
                desc={
                  "A well built mobile app can be a game changer in many industries. We use the best practices in UI execution and optimised, lightweight backends to deliver apps that work fast, are easy to use and beautiful. We code in custom transitions, animations and navigation to make each app unique and visually stunning."
                }
              ></TextItem>
            </div>
            <QuoteItem
              animation={"bounceInRight"}
              image={faceBrian}
              title={
                "Choosing the right developer is crucial for product execution. We are here to support your growth."
              }
              descText={"Shane, CTO at Hype4"}
            ></QuoteItem>
          </ColumnContainer>
        </Section>
        <Section
          className={"technoSection"}
          title
          titleText={"Technologies we work with"}
          desc
          descText={
            "We create back-end and front-end solutions using top-notch and up-to-date technologies, that are reliable, future-proof and scalable."
          }
        >
          <div className="technoOuter">
            <div className="technoList">
              {techno.dev.map(item => (
                <TechnoItem
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                ></TechnoItem>
              ))}
            </div>
          </div>
        </Section>

        <Section
          className={"processSection"}
          title
          titleText={"Our development process"}
          desc
          descText={
            "Our process involves the essential steps, is easy to understand and friendly for our clients. Each step can be individually tailored or skipped, based on your needs."
          }
        ></Section>
        <ProcessWrapper>
          {processData.dev.map(item => (
            <ProcessItem
              itemClass={item.itemClass}
              title={item.title}
              desc={item.desc}
              shapeId={item.shapeId}
              shapeId2={item.shapeId2}
              stroke={item.stroke}
              fill={item.fill}
              titleColor={item.titleColor}
            ></ProcessItem>
          ))}
        </ProcessWrapper>

        <Section
          className={"processSection"}
          title
          titleText={"Most common problems with development we solve:"}
        >
          <BrickWrapper>
            <BrickRow>
              {brickData.dev.row1.map(item => (
                <BrickItem text={item.text}></BrickItem>
              ))}
            </BrickRow>
            <BrickRow>
              {brickData.dev.row2.map(item => (
                <BrickItem text={item.text}></BrickItem>
              ))}
            </BrickRow>
          </BrickWrapper>
        </Section>

        <Section className={"projectSection"}>
          {projectByPage.reverse().map(item => (
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
    );
  }
}
