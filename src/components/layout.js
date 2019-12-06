import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header/header";
import Footer from "./footer/Footer";
import EstimateSection from "./estimateSection/EstimateSection";
import "./layout.css";
import "./typo.less";
import WwdItem from "./wwdItem/WwdItem";
import Section from "./section/Section";
import wwdData from "../data/wwd";
import Carousel from "./carousel/Carousel";
import WhiteBox from "./whiteBox/WhiteBox";
import TestiTop from "./testiTop/TestiTop";
import TestiItem from "./testiItem/TestiItem";
import testimonialsData from "../data/testimonials";
import "../less/animate.less";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <link rel="stylesheet" href="https://use.typekit.net/nou3wai.css"></link>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Section
        title
        main
        titleText={"What are you looking for?"}
        desc
        descText={"Our main services include:"}
        className={"technoSection"}
      >
        <ul className="wwdList">
          {wwdData.map(item => (
            <WwdItem
              key={item.image}
              image={item.image}
              imageClass={item.imageClass}
              title={item.title}
              desc={item.desc}
              btnLink={item.path}
            ></WwdItem>
          ))}
        </ul>
      </Section>
      <Section
        className={"testiSection"}
        noPad
        title
        main
        titleText={"Testimonials"}
      >
        <TestiTop></TestiTop>
        <Carousel>
          {testimonialsData.base.map(item => (
            <TestiItem
              companyLogo={item.companyLogo}
              text={item.text}
              sig={item.sig}
              company={item.company}
            ></TestiItem>
          ))}
        </Carousel>
      </Section>
      <WhiteBox featured text={"Our projects were featured on"}></WhiteBox>
      <EstimateSection></EstimateSection>
      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
