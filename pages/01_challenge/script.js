gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    // Pulsing glow animation
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
