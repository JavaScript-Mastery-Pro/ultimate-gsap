import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "ul",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    // markers: true,
    pin: true,
  },
});

timeline
  .to(".card2", {
    y: 30,
  })
  .to(".card3", {
    y: 60,
  });
