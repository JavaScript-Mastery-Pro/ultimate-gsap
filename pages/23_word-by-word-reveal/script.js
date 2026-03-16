import gsap from "gsap";

/* -----------------------------------------------------------
   STEP 1 — Split the text into individual <span> elements
   -----------------------------------------------------------
   GSAP cannot animate "words" by default because a normal 
   paragraph is just plain text. So we manually wrap each 
   word in its own <span> so GSAP can target them individually.

   Example:
   "Hello world" becomes:
   <span class="word">Hello</span> <span class="word">world</span>
----------------------------------------------------------- */
function splitWords(selector) {
  // Select the element containing the sentence
  const el = document.querySelector(selector);

  // Split the innerText into an array of words
  const words = el.innerText.split(" ");

  // Rebuild the HTML by wrapping each word in a span
  el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");
}

// Apply splitting to the target sentence
splitWords(".sentence");

/* -----------------------------------------------------------
   STEP 2 — Animate each word with GSAP
   -----------------------------------------------------------
   We're creating a calm, readable sequence:

   - opacity: 0 → 1     (soft fade in)
   - y: +20px → 0       (words gently lift into place) ( second example )
   - stagger: 0.12      (each word appears slightly after the previous one)
   - ease: "power2.out" (smooth, controlled deceleration)

   This creates a natural storytelling motion, perfect for UI or
   introductory text moments.
----------------------------------------------------------- */
gsap.to(".word", {
  opacity: 1, // Fade each word in
  y: 0, // Move words to their final vertical position
  duration: 0.8, // Length of each word's animation
  stagger: 0.12, // Delay between words for a paced reveal
  ease: "power2.out", // Smooth, slightly energetic easing
});
