import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const split = new SplitText(".sentence", {
  type: "words",
  // wordsClass: "word",
});

gsap.from(split.words, {
  opacity: 0,
  y: 20,
  duration: 0.8,
  stagger: 0.12,
  ease: "power2.out",
});

// gsap.from(".word", {
//   opacity: 0,
//   y: 20,
//   stagger: 0.12,
// });
