import gsap from "gsap";

gsap.to(".line span", {
  y: 0,
  scaleY: 1,
  skewY: 0,
  duration: 1.3,
  ease: "expo.out",
  stagger: {
    each: 0.1,
    from: "end",
  },
});
