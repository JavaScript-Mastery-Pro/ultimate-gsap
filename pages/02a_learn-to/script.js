import gsap from "gsap";

function showToastLoop() {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.in",
        onComplete: () => {
          // Restart after slight delay
          setTimeout(showToastLoop, 1500);
        },
      });
    },
  });
}

showToastLoop();
