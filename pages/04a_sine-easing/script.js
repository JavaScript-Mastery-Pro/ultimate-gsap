import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 1.5,
        ease: "sine.out",
        repeat: -1,
        yoyo: true,
      });
      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.2,
    ease: "power2.out",
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
    ease: "power2.out",
  });
});

button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
