gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  ease: "power2.out",
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "sine.inOut",
    });
  },
});
