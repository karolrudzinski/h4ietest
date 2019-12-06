import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./carousel.less";
// import TestiItem from "../testiItem/TestiItem";
// import testimonialsData from "../../data/testimonials";

class Carousel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    var settings = {
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "30px",
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            centerPadding: "30px",
            slidesToScroll: 1,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false
          }
        }
      ]
    };
    return (
      <div className="carouselContainer">
        <Slider {...settings}>
          {this.props.children}
          {/* {testimonialsData.base.map(item => (
            <TestiItem
              companyLogo={item.companyLogo}
              text={item.text}
              sig={item.sig}
              company={item.company}
            ></TestiItem>
          ))} */}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
