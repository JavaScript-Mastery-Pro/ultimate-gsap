import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// split into characters
const split = new SplitText(".title", { type: "chars" });

// animate each character
split.chars.forEach((char, i) => {
  // one state object per character (VERY IMPORTANT)
  const state = {
    wght: 400,
    wdth: 100,
  };

  // set initial
  char.style.fontVariationSettings = `
    "wght" ${state.wght},
    "wdth" ${state.wdth}
  `;

  gsap.to(state, {
    wght: 900,
    wdth: 130, // animate width properly
    duration: 2,
    delay: i * 0.12,
    ease: "back.out",
    repeat: -1,
    yoyo: true,

    onUpdate: () => {
      char.style.fontVariationSettings = `
        "wght" ${state.wght},
        "wdth" ${state.wdth}
      `;
    },
  });

  // entrance animation
  gsap.from(char, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.08,
    ease: "power2.out",
  });
});
