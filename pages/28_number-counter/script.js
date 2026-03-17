import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const counter = document.querySelector(".counter");
const finalDigits = counter.textContent.trim().split("");

// 1. Split into characters
const split = SplitText.create(counter, { type: "chars" });

// 2. Rebuild each digit as a slot column
split.chars.forEach((char, i) => {
  const digitValue = finalDigits[i];

  const digit = document.createElement("div");
  digit.className = "digit";

  const stack = document.createElement("div");
  stack.className = "digit-stack";

  for (let n = 0; n <= 9; n++) {
    const span = document.createElement("span");
    span.textContent = n;
    stack.appendChild(span);
  }

  digit.appendChild(stack);
  char.replaceWith(digit);

  digit.dataset.value = digitValue;
});

// 3. Animate the stacks
const stacks = document.querySelectorAll(".digit-stack");
const digitHeight = document.querySelector(".digit").clientHeight;

stacks.forEach((stack, i) => {
  const value = +stack.parentElement.dataset.value;

  gsap.fromTo(
    stack,
    { y: digitHeight * 10 },
    {
      y: -digitHeight * value,
      duration: 1.8,
      ease: "back.out",
      delay: i * 0.15,
    },
  );
});
