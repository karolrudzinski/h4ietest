import React from "react";
import "./testiItem.less";
import quoteImg from "../../images/quote/quoteDark.svg";

const TestiItem = ({ text, sig, company, companyLogo }) => (
  <div className="testiItem">
    <img className="testiQuoteImg" src={quoteImg} alt="" />
    <div className="testiItemTopSpec">
      <div className={`testiBg ${companyLogo}`}></div>
      <p className="testiText">{text}</p>
    </div>
    <p className="testiSig">
      {sig} <span className="textPurple">{company}</span>
    </p>
  </div>
);
export default TestiItem;
