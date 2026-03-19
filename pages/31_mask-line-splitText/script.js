import "./style.css";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const split = new SplitText(".masked-text", {
  type: "lines",
  lineClass: "line",
});

// Wrap each line's content
split.lines.forEach((line) => {
  const inner = document.createElement("div");
  inner.classList.add("line-inner");

  inner.innerHTML = line.innerHTML;
  line.innerHTML = "";
  line.appendChild(inner);
});

gsap.to(".line-inner", {
  yPercent: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: "power3.out",
});
