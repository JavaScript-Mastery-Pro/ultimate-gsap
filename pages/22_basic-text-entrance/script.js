import gsap from "gsap";

gsap.to(".headline", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "sine.out",
});

gsap.to(".sub", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "sine.out",
  delay: 0.15,
});
