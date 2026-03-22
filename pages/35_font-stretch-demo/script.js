import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const container = document.querySelector(".demo");
const heading = document.querySelector("h1");

const split = new SplitText(heading, {
  type: "chars",
});

const containerHeight = container.offsetHeight;
const textHeight = heading.offsetHeight;

// Add top spacing
const topOffset = containerHeight * 0.15;

// Dynamic calculations
const scaleY = (containerHeight - topOffset) / textHeight;
const distanceY = containerHeight - textHeight - topOffset;

const tl = gsap.timeline();

tl.to(split.chars, {
  scaleY: scaleY,
  transformOrigin: "bottom left",
  stagger: { each: 0.06, from: "random" },
  ease: "back.in",
});

tl.to(split.chars, {
  y: -distanceY,
  scaleY: 1,
  transformOrigin: "bottom left",
  stagger: { each: 0.03, from: "random" },
  ease: "back.out",
});

tl.to(".preview img", {
  opacity: 1,
  y: 0,
  ease: "expo.out",
});
