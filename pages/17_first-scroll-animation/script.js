import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top center",
    // markers: true,
  },
  yPercent: 150,
  stagger: 0.5,
  ease: "elastic.out(1,1)",
});
