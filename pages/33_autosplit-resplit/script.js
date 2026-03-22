import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Toggle grid layout
const grid = document.querySelector(".grid");
const button = document.querySelector(".toggle");

button.addEventListener("click", () => {
  grid.classList.toggle("expanded");
});

// SplitText (NO onSplit)
// new SplitText(".sentence", {
//   type: "lines",
//   linesClass: "line",
// });

// Animation runs only once
// gsap.from(".line", {
//   y: 40,
//   opacity: 0,
//   stagger: 0.08,
//   duration: 0.5,
//   ease: "power2.out",
// });

// SplitText WITH onSplit
new SplitText(".sentence", {
  type: "lines",
  linesClass: "line",
  autoSplit: true,

  onSplit(self) {
    gsap.from(self.lines, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out",
    });
  },
});
