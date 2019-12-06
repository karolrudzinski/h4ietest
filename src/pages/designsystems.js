import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageBackground from "../components/pageBackground/PageBackground";
import PageHero from "../components/pageHero/PageHero";
import "../components/backgrounds.less";
import images from "../data/bgshapes.js";
import faceMichal from "../images/faces/michal.png";
import ColumnContainer from "../components/columnContainer/ColumnContainer";
import Section from "../components/section/Section";
import QuoteItem from "../components/quoteItem/QuoteItem";
import Laptop from "../components/laptop/Laptop";
import "../less/designsystems.less";
import NumberedItem from "../components/numberedItem/NumberedItem";
import numberedData from "../data/numberedItem";
import Carousel from "../components/carousel/Carousel";
import TestiItem from "../components/testiItem/TestiItem";
import testimonialsData from "../data/testimonials";
import ProcessItem from "../components/processItem/ProcessItem";
import processData from "../data/processData";
import ProcessWrapper from "../components/processWrapper/ProcessWrapper";

const DesignSystems = () => (
  <Layout>
    <SEO title="designSystems" />
    <PageBackground page={"topDesignSysBg"} shapes={"topDesignSysMask"}>
      {images.designsys.map(item => (
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
        "Design systems save you time and money, so you can focus on innovating"
      }
      description={
        "Precise, time and money saving process for your entire team"
      }
      containerWidth={"designsys"}
    ></PageHero>
    <Section className={"laptopQuoteSection"}>
      <ColumnContainer>
        <QuoteItem
          image={faceMichal}
          lowerDesc
          title={"Up to 25% faster product building and maintenance."}
          descText={"Michał, CEO at Hype4"}
          lowerDescText={"Design System Expert"}
          animation={"bounceInRight"}
        ></QuoteItem>
        <Laptop></Laptop>
      </ColumnContainer>
    </Section>
    <Section
      className={"countSection"}
      title
      titleText={"Visible improvement. Real numbers."}
      desc
      descText={
        "Our customers share their experiences with how our design system improved both their products and their workflow. The numbers speak for themselves:"
      }
      className={"laptopQuoteSection"}
    ></Section>

    <Section
      className={"packageSection"}
      title
      titleText={"What's in the design system package?"}
      desc
      descText={
        "Even a design library itself has a huge positive impact on your work. Each Design System is tailored to the right plan for your company."
      }
    >
      <ul className="numberedItemList">
        {numberedData.designsys.map(item => (
          <NumberedItem
            key={item.title}
            itemNum={item.itemNum}
            image={item.image}
            title={item.title}
            desc={item.desc}
          ></NumberedItem>
        ))}
      </ul>
    </Section>

    <Section
      className={"processSection"}
      title
      titleText={"Building a design system"}
      desc
      descText={
        "Over the years we've come up with the right process to build a scalable design system for companies of any size."
      }
    ></Section>
    <ProcessWrapper>
      {processData.designsys.map(item => (
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
      className={"carouselSection"}
      title
      titleText={"What our clients say?"}
      desc
      descText={
        "Even a design library itself has a huge positive impact on your work. Each Design System is tailored to the right plan for your company."
      }
    >
      <Carousel>
        {testimonialsData.designsys.map(item => (
          <TestiItem
            companyLogo={item.companyLogo}
            text={item.text}
            sig={item.sig}
            company={item.company}
          ></TestiItem>
        ))}
      </Carousel>
    </Section>
  </Layout>
);

export default DesignSystems;
