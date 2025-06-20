import gsap from "gsap";

const fab = document.querySelector(".fab");
const children = document.querySelectorAll(".fab-child");

const radius = 100;
let expanded = false;

fab.addEventListener("click", () => {
  expanded = !expanded;
  fab.textContent = expanded ? "×" : "＋";

  if (expanded) {
    const arcSpan = Math.PI / 1.5; // 90° arc = tight
    const startAngle = Math.PI / 2 + arcSpan / 2; // center over top

    children.forEach((child, i) => {
      const angle = startAngle - i * (arcSpan / (children.length - 1));
      const x = Math.cos(angle) * radius;
      const y = -Math.sin(angle) * radius;

      gsap.to(child, {
        x,
        y,
        opacity: 1,
        scale: 1,
        rotate: 360,
        duration: 0.5,
        ease: "expo.out(1.4)",
        pointerEvents: "auto",
      });
    });
  } else {
    children.forEach((child) => {
      gsap.to(child, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.8,
        rotate: 0,
        duration: 0.3,
        ease: "power1.in",
        pointerEvents: "none",
      });
    });
  }
});
