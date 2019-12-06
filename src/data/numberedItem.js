import ds1 from "../images/numbereditems/designsystems/designlibrary.png";
import ds2 from "../images/numbereditems/designsystems/documentation.png";
import ds3 from "../images/numbereditems/designsystems/code.png";
import cskf1 from "../images/numbereditems/cskf/challenge1.png";
import cskf2 from "../images/numbereditems/cskf/challenge2.png";
import cskf3 from "../images/numbereditems/cskf/challenge3.png";
import cskf4 from "../images/numbereditems/cskf/challenge4.png";

const numberedData = {
  designsys: [
    {
      itemNum: "01",
      title: "Design library",
      desc:
        "A design system starts with a design tool library file made in Sketch, inVision Studio or Adobe XD. The file contains all possible building blocks (atoms) and more complex components (molecules and organisms) that inter-connect with set dependencies.",
      image: ds1
    },
    {
      itemNum: "02",
      title: "Documentation wiki",
      desc:
        "The documentation part starts taking shape alongside the design process, but also contains code components. It's a set of use-cases, good practices, edge cases and solutions for every possible interface problem your team can think of while working on your product.",
      image: ds2
    },
    {
      itemNum: "03",
      title: "Code components",
      desc:
        "Think of this as building blocks of your product. They're ready-to-use code snippets your developers can copy and paste into their own code. It allows for consistency as there's no need to code the same elements over and over again.",
      image: ds3
    }
  ],
  cskf: [
    {
      itemNum: "01",
      title: "Visualising the data",
      desc:
        "The biggest challenge in the project were the diagrams and graphs, showing the complicated, rich data in a clear, understandable and friendly way.",
      image: cskf1
    },
    {
      itemNum: "02",
      title: "User friendly approach",
      desc:
        "Investing doesn’t need to be boring! We focused on creating appealing interface, illustrations and iconography. You can take interactive investor test, and learn how to invest with and investing game, with 0% risk and 100% fun.",
      image: cskf2
    },
    {
      itemNum: "03",
      title: "Funds catalogue",
      desc:
        "We developed dynamic, real-time catalogue with robust filtering and all the neccessary information, helpful ranks and risk ratios. We created convenient, one-click comparising and buying process. Investing was never that easy!",
      image: cskf3
    },
    {
      itemNum: "04",
      title: "Investment wizard & helpful tools",
      desc:
        "We did automated, smart personal investment and wallet creator. Just pick the right funds from the suggested list, based on your investor profile.",
      image: cskf4
    }
  ]
};

export default numberedData;
