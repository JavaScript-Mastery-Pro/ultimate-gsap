import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const title = document.querySelector(".title");

const btnDefault = document.querySelector(".btn-default");
const btnXO = document.querySelector(".btn-xo");
const btnSlow = document.querySelector(".btn-slow");
const btnDelay = document.querySelector(".btn-delay");

// Default
btnDefault.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: "WELCOME TO GSAP",
  });
});

// XO Characters
btnXO.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP",
      chars: "XO",
    },
  });
});

// Slow Speed
btnSlow.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP",
      speed: 0.3,
    },
  });
});

// Reveal Delay
btnDelay.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP",
      revealDelay: 0.5,
    },
  });
});
