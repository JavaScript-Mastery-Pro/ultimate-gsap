import gsap from "gsap";

let currentToast = 0;
const toasts = [".toast.one", ".toast.two"];

function animateNextToast() {
  const selector = toasts[currentToast];

  gsap.to(selector, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    onComplete: () => {
      // Stay visible for 2.5s, then slide out
      gsap.to(selector, {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.in",
        onComplete: () => {
          // Switch toast and restart after a short break
          currentToast = (currentToast + 1) % toasts.length;
          setTimeout(animateNextToast, 1500);
        },
      });
    },
  });
}

animateNextToast();
