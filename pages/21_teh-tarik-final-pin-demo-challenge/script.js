import gsap from "gsap";

import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

const heroTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true,
  },
});

heroTL.to("#textpath", {
  attr: { startOffset: "-200%" },
  ease: "none",
});

const horizontalTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
  },
});

horizontalTL.to(".scroll-container", {
  xPercent: -55,
});

horizontalTL.to(
  ".man",
  {
    xPercent: 50,
  },
  0,
);

const starInteractionTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".proud-container .img-box",
    start: "top 50%",
    end: "+=100%",
    scrub: true,
  },
});

starInteractionTL
  .to(".left-hand", {
    xPercent: 20,
  })
  .to(
    ".right-hand",
    {
      xPercent: -20,
    },
    "<",
  )
  .to(".touching-star", {
    scale: 14,
    duration: 2,
  })
  .to(
    ".touching-star path",
    {
      fill: "#d6322f",
    },
    "<",
  );

const colorTransitionTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".color-change-container",
    start: "top top",
    end: "+=600%",
    scrub: true,
    pin: true,
  },
});

const group1 = ".img1, .img2, .img3";
const group2 = ".img4, .img5, .img6";
const group3 = ".img7, .img8, .img9";

/* Stage 1 → Stage 2 */

colorTransitionTL
  .to(group1, {
    bottom: "-50vh",
    duration: 1,
  })

  .to(
    group2,
    {
      bottom: "7%",
      duration: 1,
    },
    "<",
  )

  .to(
    ".sec-box",
    {
      clipPath: "circle(100% at 50% 50%)",
      duration: 1,
    },
    "<",
  )

  /* Stage 2 → Stage 3 */

  .to(group2, {
    bottom: "-50vh",
    duration: 1,
  })

  .to(
    group3,
    {
      bottom: "7%",
      duration: 1,
    },
    "<",
  )

  .to(
    ".third-box",
    {
      clipPath: "circle(100% at 50% 50%)",
      duration: 1,
    },
    "<",
  );
