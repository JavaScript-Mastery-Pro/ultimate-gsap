import gsap from "gsap";

gsap.from(".line span", {
  yPercent: 150,
  scaleY: 1.5,
  skewY: 5,
  duration: 1.3,
  ease: "expo.out",
  stagger: {
    each: 0.1,
    from: "end",
  },
});
