import gsap from "gsap";

// Immediately set the box to an off-screen state without animation
gsap.set(".gsap-box", {
  opacity: 0,
  scale: 0.5,
  y: 100,
});

// Animate it into view after a short delay
gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 0.6,
  ease: "expo.out",
});
