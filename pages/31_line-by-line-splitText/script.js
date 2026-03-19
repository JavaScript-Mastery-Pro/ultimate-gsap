import "./style.css";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const split = new SplitText(".masked-text", {
  type: "lines",
});

gsap.from(split.lines, {
  duration: 0.8,
  ease: "power2.out",
  y: 100,
  stagger: 0.1,
});
