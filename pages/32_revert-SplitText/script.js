import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Split into words
const split = new SplitText(".sentence", {
  type: "words",
  wordsClass: "word",
});

// Animate words
gsap.from(split.words, {
  y: 20,
  opacity: 0,
  stagger: 0.08,
  duration: 0.6,
  ease: "power2.out",

  // After animation completes, revert back
  onComplete: () => {
    split.revert();
  },
});
