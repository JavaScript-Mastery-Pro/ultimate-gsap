import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Select layers
const layers = gsap.utils.toArray(".layer");
const main = layers[0];
const trails = layers.slice(1);

// Opacity system
layers.forEach((el, i) => {
  if (i === 0) el.style.opacity = 1;
  else el.style.opacity = 0.4 - (0.3 / (layers.length - 2)) * (i - 1);
});

// Split only main layer
const split = new SplitText(main, { type: "chars" });

// Layout calculation (based on actual size)
const bounds = main.getBoundingClientRect();
const xStep = bounds.width * 0.02;
const yStep = bounds.height * 0.04;

// Position trailing layers
gsap.set(trails, {
  x: (i) => (i + 1) * xStep,
  y: (i) => (i + 1) * yStep,
});

// Animation timeline
const tl = gsap.timeline();

// Character animation
tl.from(split.chars, {
  scaleY: 0,
  transformOrigin: "bottom center",
  stagger: 0.04,
  ease: "back.out(1.8)",
  duration: 1,
});

// Trail animation
tl.from(trails, {
  x: 0,
  y: 0,
  opacity: 0,
  stagger: 0.08,
  ease: "power3.out",
  duration: 1.2,
});
