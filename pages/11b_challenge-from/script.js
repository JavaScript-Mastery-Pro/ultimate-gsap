import gsap from "gsap";

const card = document.getElementById("card");
let flipped = false;

card.addEventListener("mouseenter", () => {
  if (!flipped) {
    gsap.from(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    gsap.to(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    flipped = true;
  }
});

card.addEventListener("mouseleave", () => {
  if (flipped) {
    gsap.from(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    gsap.to(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    flipped = false;
  }
});
