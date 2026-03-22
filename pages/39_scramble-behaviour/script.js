import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const title = document.querySelector(".title");

const btnWord = document.querySelector(".btn-word");
const btnRTL = document.querySelector(".btn-rtl");
const btnClass = document.querySelector(".btn-class");

// Word-by-word reveal
btnWord.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP COURSE",
      delimiter: " ",
      speed: 0.1,
    },
  });
});

// Right to Left reveal
btnRTL.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP",
      rightToLeft: true,
      speed: 0.1,
    },
  });
});

// Class styling (new + old)
btnClass.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: {
      text: "WELCOME TO GSAP",
      newClass: "new-text",
      oldClass: "old-text",
      speed: 0.1,
    },
  });
});
