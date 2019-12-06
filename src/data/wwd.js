import web from "../images/whatwedo/webdevelopment.png";
import mobile from "../images/whatwedo/appdevelopment.png";
import design from "../images/whatwedo/design.png";
import designsys from "../images/whatwedo/designsystems.png";

export default [
  {
    title: "Web Development",
    desc:
      "We excell in both large, complex portals and smaller, campaign landing pages, that load fast and look amazing.",
    image: web,
    imageClass: "wwdWeb",
    path: "/development"
  },
  {
    title: "Mobile Development",
    desc:
      "We use the best practices in UI execution and optimised, lightweight backends to deliver apps that look great & work fast.",
    image: mobile,
    imageClass: "wwdMobile",
    path: "/development"
  },
  {
    title: "Product Design",
    desc:
      "We designed over +250 multiplatform product interfaces. With this amount of experience, nothing is impossible!",
    image: design,
    imageClass: "wwdDesign",
    path: "/design"
  },
  {
    title: "Design Systems",
    desc:
      "Design systems are a set of processes, that save you time and money, so you can focus on innovating.",
    image: designsys,
    imageClass: "wwdDesignsys",
    path: "/designsystems"
  }
];
