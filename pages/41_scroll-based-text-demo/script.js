import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// BUILD STACKED TEXT
// -----------------------------
const text = "SEIZE GREATNESS";
const container = document.querySelector(".text-container");

function buildStackedText(str) {
  const lines = [];
  for (let i = 1; i <= str.length; i++) {
    lines.push(str.slice(0, i));
  }
  return lines;
}

const stackedLines = buildStackedText(text);

stackedLines.forEach((line) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("line-wrapper");

  const el = document.createElement("h1");
  el.classList.add("line");
  el.textContent = line;

  wrapper.appendChild(el);
  container.appendChild(wrapper);
});

// -----------------------------
// GSAP SCROLL SYSTEM
// -----------------------------

const lines = document.querySelectorAll(".line");

// convert to array so we can slice
const linesArray = Array.from(lines);

// separate last line
const animatedLines = linesArray.slice(0, -1);

// initial state
gsap.set(animatedLines, { y: 0 });

gsap.to(animatedLines, {
  y: (i, el) => el.offsetHeight,
  stagger: 0.08,
  ease: "back.out",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=200%",
    scrub: true,
    markers: true,
  },
});
