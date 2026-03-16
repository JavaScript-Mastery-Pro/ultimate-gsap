import gsap from "gsap";

/* -----------------------------------------------------------
   STEP 1 — Split text into characters
----------------------------------------------------------- */
function splitChars(selector) {
  const el = document.querySelector(selector);
  const text = el.innerText;

  el.innerHTML = text
    .split("")
    .map((char) =>
      char === " " ? "&nbsp;" : `<span class="char">${char}</span>`,
    )
    .join("");
}

splitChars(".headline");

/* -----------------------------------------------------------
   STEP 2 — Animate each character
----------------------------------------------------------- */
gsap.to(".char", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.035,
  ease: "power3.out",
});
