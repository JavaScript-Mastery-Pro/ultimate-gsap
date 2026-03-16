import gsap from "gsap";

gsap.fromTo(
  ".horizontal-mask",
  {
    clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
  },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    duration: 3,
    ease: "power4.out",
  },
);
