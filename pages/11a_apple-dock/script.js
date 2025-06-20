import gsap from "gsap";

const dock = document.querySelector(".dock");
const icons = document.querySelectorAll(".icon");
const trigger = document.querySelector(".dock-trigger");

let isDockVisible = false;
let isDockHovered = false;
let isTriggerHovered = false;
let isReadyForHover = false;
let hasDockEntered = false;

function showDock() {
  gsap.to(dock, {
    bottom: 10,
    duration: 0.6,
    ease: "back.out(1.7)",
  });

  icons.forEach((icon, i) => {
    gsap.to(icon, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      delay: i * 0.06,
      ease: "back.out(1.3)",
    });
  });

  setTimeout(() => {
    isReadyForHover = true;
  }, 500);
}

function hideDock() {
  isDockVisible = false;
  isReadyForHover = false;
  hasDockEntered = false;

  icons.forEach((icon, i) => {
    gsap.to(icon, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      delay: i * 0.03,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  });

  gsap.to(dock, {
    bottom: -150,
    duration: 0.5,
    ease: "expo.inOut",
    overwrite: "auto",
  });
}

trigger.addEventListener("mouseenter", () => {
  isTriggerHovered = true;

  if (!isDockVisible) {
    isDockVisible = true;
    showDock();
  }
});

trigger.addEventListener("mouseleave", () => {
  isTriggerHovered = false;

  setTimeout(() => {
    if (!isDockHovered) hideDock();
  }, 100);
});

dock.addEventListener("mouseenter", () => {
  isDockHovered = true;
});

dock.addEventListener("mouseleave", () => {
  isDockHovered = false;

  if (!isTriggerHovered) hideDock();
});

// Proximity hover scaling
dock.addEventListener("mousemove", (e) => {
  if (!isDockVisible || !isDockHovered || !isReadyForHover) return;

  const rect = dock.getBoundingClientRect();
  const centerX = e.clientX - rect.left;

  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(centerX - (iconCenter - rect.left));
    const maxDistance = 120;

    const scale = Math.max(1, 1.7 - distance / maxDistance);

    gsap.to(icon, {
      scale,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
