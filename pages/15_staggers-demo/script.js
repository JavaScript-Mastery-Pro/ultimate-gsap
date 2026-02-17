import gsap from "gsap";

gsap.from(".card", {
  scale: 0,
  ease: "elastic.out(1,1)", // This ease is the key to get the bouncy effect
  stagger: 0.06, // to get a quick animation
});
