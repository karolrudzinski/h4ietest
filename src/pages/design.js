import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageBackground from "../components/pageBackground/PageBackground";
import PageHero from "../components/pageHero/PageHero";
import "../components/backgrounds.less";
import "../less/design.less";
import images from "../data/bgshapes.js";
import Section from "../components/section/Section";
import ColumnContainer from "../components/columnContainer/ColumnContainer";
import TextItem from "../components/textItem/TextItem";
import QuoteItem from "../components/quoteItem/QuoteItem";
import faceDiana from "../images/faces/diana.png";
import faceMichal from "../images/faces/michal.png";
import devItemImg1 from "../images/textItems/face.svg";
import devItemImg2 from "../images/textItems/heart.svg";
import devItemImg3 from "../images/textItems/diamond.svg";
import devItemImg4 from "../images/textItems/eye.svg";
import ParallaxSection from "../components/parallaxSection/ParallaxSection";
import ProcessItem from "../components/processItem/ProcessItem";
import processData from "../data/processData";
import ProcessWrapper from "../components/processWrapper/ProcessWrapper";
import BrickWrapper from "../components/brickWrapper/BrickWrapper";
import BrickItem from "../components/brickItem/BrickItem";
import BrickRow from "../components/brickRow/BrickRow";
import brickData from "../data/brickData";
import ReactModal from "react-modal";
import CustomModal from "../components/modal/CustomModal";
import Form from "../components/form/Form";
import "../less/modal.less";
import Project from "../components/project/Project";
import ProjectData from "../data/projects";

export default class IndexPage extends React.Component {
  // const IndexPage = () => (

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
      if (item.page == "design") {
        return true;
      }
    }

    let projectByPage = ProjectData.filter(filterByPage);

    return (
      <Layout>
        <SEO title="Design" />
        <PageBackground page={"topDesignBg"} shapes={"topDesignMask"}>
          {images.design.map(item => (
            <img
              key={item.img}
              src={item.img}
              className={item.className}
              alt="background shape"
            />
          ))}
        </PageBackground>
        <PageHero
          heading={
            "We build interfaces which are valuable for your business and friendly to your customers"
          }
          description={
            "We designed over +250 multiplatform product interfaces. With this amount of experience, nothing is impossible"
          }
          containerWidth={"design"}
        ></PageHero>
        <ParallaxSection design></ParallaxSection>
        <Section className="textQuoteSection">
          <ColumnContainer>
            <div className="textContainer">
              <TextItem
                image={devItemImg1}
                title={"Your product is for your user"}
                desc="The main goal of User Experience is increasing the user satisfaction, by fixing the functionality and usability of the product. Building interactive products we focus on the user having the best possible experience imaginable."
              ></TextItem>
              <TextItem
                image={devItemImg2}
                title={"UX that works"}
                desc={
                  "We create professional, easy to understand and easy to use interfaces, that have a huge effect on conversion and as a result it leads to a business success through a loyal group of happy customers."
                }
              ></TextItem>
            </div>
            <QuoteItem
              image={faceDiana}
              title={
                "Behind all the wireframes, there's a user waiting for the perfect product"
              }
              descText={"Diana, Creative Director at Hype4"}
              animation={"bounceInRight"}
            ></QuoteItem>
          </ColumnContainer>
        </Section>

        <Section
          className={"brickSectionUx"}
          title
          titleText={"Most common problems with UX we solve:"}
        >
          <BrickWrapper>
            <BrickRow>
              {brickData.ux.row1.map(item => (
                <BrickItem text={item.text}></BrickItem>
              ))}
            </BrickRow>
            <BrickRow>
              {brickData.ux.row2.map(item => (
                <BrickItem text={item.text}></BrickItem>
              ))}
            </BrickRow>
          </BrickWrapper>
        </Section>

        <Section className="textQuoteSectionReverse" quoteLeft>
          <ColumnContainer reverse>
            <div className="textContainer">
              <TextItem
                image={devItemImg3}
                title={"Every product is different"}
                desc="The main purpose of a good design, is showing complex information and attractive way. We strongly believe that every product is different and deserves an individual approach. Good design is personal - it adapts to the product type and the needs and expectances of the target market."
              ></TextItem>
              <TextItem
                image={devItemImg4}
                title={"A visual way to success"}
                desc={
                  "Professional visual side of a digital product highly influences it's market success. Modern, readable and simply attractive visual design makes the product stand out and helps it sell better. We create carefully crafted, elegant interfaces that builds trust and security, which positively affects how the user feels about it."
                }
              ></TextItem>
            </div>
            <QuoteItem
              image={faceMichal}
              title={
                "Visual design is a business card of your digital product."
              }
              descText={"Michał, CEO at Hype4"}
              animation={"bounceInLeft"}
            ></QuoteItem>
          </ColumnContainer>
        </Section>
        <Section
          className={"brickSectionUi"}
          title
          titleText={"Most common problems with UI we solve:"}
        >
          <BrickWrapper>
            <BrickRow>
              {brickData.ui.row1.map(item => (
                <BrickItem
                  onClick={this.handleOpenModal}
                  text={item.text}
                ></BrickItem>
              ))}
            </BrickRow>
            <BrickRow>
              {brickData.ui.row2.map(item => (
                <BrickItem text={item.text}></BrickItem>
              ))}
            </BrickRow>
          </BrickWrapper>
        </Section>

        <Section
          className={"processSectionDesign"}
          title
          titleText={"Most common problems with UI we solve:"}
          desc
          descText={
            "Our process involves the essential steps, is easy to understand and friendly for our clients. Each step can be individually tailored or skipped, based on your needs."
          }
        ></Section>
        <ProcessWrapper openModalFn={this.handleOpenModal}>
          {processData.design.map(item => (
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

        <Section>
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

        <ReactModal isOpen={this.state.showModal} className={"modalOuter"}>
          <button className={"closeModal"} onClick={this.handleCloseModal}>
            x
          </button>
          <CustomModal>
            <Form></Form>
          </CustomModal>
        </ReactModal>
      </Layout>
    );
  }
}
