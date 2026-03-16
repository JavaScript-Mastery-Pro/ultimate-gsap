import gsap from "gsap";

/* -----------------------------------------------------------
   Line-by-line masked reveal
----------------------------------------------------------- */

gsap.to(".line span", {
  y: 0,
  duration: 1.2,
  stagger: 0.12,
  ease: "power4.out",
});
