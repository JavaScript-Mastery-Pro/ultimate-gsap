const reactions = document.querySelector(".reactions");

reactions.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const emoji = e.target.dataset.emoji;
  const rect = e.target.getBoundingClientRect();

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = emoji;

  // Place bubble near button
  bubble.style.left = `${rect.left + rect.width / 2}px`;
  bubble.style.top = `${rect.top}px`;

  document.body.appendChild(bubble);

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
