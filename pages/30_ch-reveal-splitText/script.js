import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const split = new SplitText(".headline", {
  type: "chars"
});

gsap.from(split.chars, {
  y: 100,
  opacity: 0,
  stagger: 0.04,
  duration: 0.8,
  ease: "power3.out"
});