import litecoinpro from "../images/projects/litecoinpro.png";
import bitcoinbg from "../images/projects/bitcoin.png";
import litecoinbg from "../images/projects/litecoin.png";
import estipro from "../images/projects/estipro.png";
// import estibgback from "../images/projects/estibgback.png";
// import estibgfront1 from "../images/projects/estibgfront1.svg";
// import estibgfront2 from "../images/projects/estibgfront2.svg";

import kfpro from "../images/projects/kfpro.png";
import kfbg from "../images/projects/kfbg.png";

import panekpro from "../images/projects/panekpro.png";
import panekbg from "../images/projects/panekbg.png";

import ffpro from "../images/projects/ffpro.png";
import ffbg from "../images/projects/ffbg.png";

import aureopro from "../images/projects/aureopro.png";
import aureobg from "../images/projects/aureobbg.png";

import centrapro from "../images/projects/centrapro.png";

import govpro from "../images/projects/govukpro.png";

import babypro from "../images/projects/babypro.png";
import babyicon from "../images/projects/babynotebaby.png";
import babybg from "../images/projects/babynotebg.png";

export default [
  {
    side: "right",
    projectName: "projectItemCentra",
    cardName: "cardCentra",
    maskName: "maskCentra",
    logoName: "logoCentra",
    projectDesc: "We designed and built the official app for Centra stores.",
    projectPro: "centraPro",
    imgSrc: centrapro,
    animation: "bounceInRight"
  },

  {
    side: "left",
    projectName: "projectItemGov",
    cardName: "cardGov",
    maskName: "maskGov",
    logoName: "logoGov",
    projectDesc:
      "We designed the User Experience flows and visuals for GOV.UK biometric ID services.",
    projectPro: "govPro",
    imgSrc: govpro,
    animation: "bounceInLeft"
  },
  {
    page: "design",
    projectName: "projectItemLiteCoin",
    side: "right",
    cardName: "cardLiteCoin",
    maskName: "maskLiteCoin",
    logoName: "logoLiteCoin",
    projectDesc:
      "We designed the official wallet app for one of the most innovative and well known cryptocurrencies",
    projectPro: "liteCoinPro",
    imgSrc: litecoinpro,
    bgClass: "bgLiteCoin",
    bgClass2: "bgLiteCoinBit",
    bgSrc: litecoinbg,
    bgSrc2: bitcoinbg,
    animation: "bounceInRight",
    bgAnimation1: "bounceInLeft",
    bgAnimation2: "bounceInRight"
  },
  {
    page: "development",
    side: "left",
    projectName: "projectItemEsti",
    cardName: "cardEsti",
    maskName: "maskEsti",
    logoName: "logoEsti",
    projectDesc:
      "We created an AI and machine learning based cryptocurrency analytics tool",
    projectPro: "estiPro",
    imgSrc: estipro,
    animation: "bounceInLeft"
  },
  {
    page: "design",
    side: "right",
    projectName: "projectItemBaby",
    cardName: "cardBaby",
    maskName: "maskBaby",
    logoName: "logoBaby",
    projectDesc:
      "We created a pregnancy app, that has been featured by Apple, InVision and countless parental websites & blogs",
    projectPro: "babyPro",
    imgSrc: babypro,
    bgClass: "bgBaby",
    bgClass2: "bgBaby2",
    bgSrc: babyicon,
    bgSrc2: babybg,
    animation: "bounceInRight",
    bgAnimation1: "fadeIn",
    bgAnimation2: "bounceInUp"
  },
  {
    page: "development",
    side: "left",
    projectName: "projectItemKf",
    cardName: "cardKf",
    maskName: "maskKf",
    logoName: "logoKf",
    projectDesc:
      "We designed and coded the most innovative Investment Fund buying platform",
    projectPro: "kfPro",
    imgSrc: kfpro,
    caseStudy: "portfolio/kupfundusz",
    bgClass: "bgKf",
    bgSrc: kfbg,
    animation: "bounceInLeft",
    bgAnimation1: "bounceInUp"
  },
  {
    side: "right",
    projectName: "projectItemPanek",
    cardName: "cardPanek",
    maskName: "maskPanek",
    logoName: "logoPanek",
    projectDesc:
      "We redsigned the website and the mobile app of the largest car sharing company in Poland",
    projectPro: "panekPro",
    imgSrc: panekpro,
    bgClass: "bgPanek",
    bgSrc: panekbg,
    animation: "bounceInRight",
    bgAnimation1: "bounceInRight"
  },
  {
    side: "left",
    projectName: "projectItemFf",
    cardName: "cardFf",
    maskName: "maskFf",
    logoName: "logoFf",
    projectDesc:
      "We redesigned and coded the biggest Investment Funds conference in Poland",
    projectPro: "ffPro",
    imgSrc: ffpro,
    bgClass: "bgFf",
    bgSrc: ffbg,
    animation: "bounceInLeft",
    bgAnimation1: "bounceInUp"
  },
  {
    side: "right",
    projectName: "projectItemAureo",
    cardName: "cardAureo",
    maskName: "maskAureo",
    logoName: "logoAureo",
    projectDesc:
      "We created self-learning, smart health assistant & period tracker for women of all ages",
    projectPro: "aureoPro",
    imgSrc: aureopro,
    bgClass: "bgAureo",
    bgSrc: aureobg,
    animation: "bounceInRight",
    bgAnimation1: "fadeIn"
  }
];
