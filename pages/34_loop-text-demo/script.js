import gsap from "gsap";

const words = document.querySelectorAll(".word-list p");

let timeline;

function createAnimation() {
  if (timeline) {
    timeline.kill();
  }

  const wordBoxWidth = document.querySelector(".word-list").offsetWidth;
  const containerWidth = document.querySelector(".mask-box").offsetWidth;

  const distance = containerWidth - wordBoxWidth;

  timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  timeline.fromTo(
    words,
    {
      x: 0,
      opacity: 0.1,
    },
    {
      x: distance,
      opacity: 1,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.8)",
      delay: 0.5,
    },
  );
}

createAnimation();

window.addEventListener("resize", () => {
  createAnimation();
});
