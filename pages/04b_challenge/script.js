import gsap from "gsap";

const reactions = document.querySelector(".reactions");

reactions.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const emoji = e.target.dataset.emoji;
  const buttonRect = e.target.getBoundingClientRect();
  const reactionsRect = reactions.getBoundingClientRect();

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = emoji;

  document.body.appendChild(bubble);

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  // X: center of the clicked button
  const bubbleX = buttonRect.left + buttonRect.width / 2 + scrollLeft;

  // Y: top of the reactions container
  const bubbleY = reactionsRect.top + scrollTop;

  bubble.style.left = `${bubbleX}px`;
  bubble.style.top = `${bubbleY}px`;

  // Animate
  const xOffset = gsap.utils.random(-50, 50);
  const rotation = gsap.utils.random(-30, 30);

  gsap.fromTo(
    bubble,
    {
      opacity: 1,
      y: 0,
      scale: 0.5,
      x: 0,
      rotation: 0,
    },
    {
      opacity: 0,
      y: -200,
      x: xOffset,
      scale: 1.5,
      rotation: rotation,
      duration: 1.4,
      ease: "power3.out",
      onComplete: () => {
        bubble.remove();
      },
    }
  );
});
