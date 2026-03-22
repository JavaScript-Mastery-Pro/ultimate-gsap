import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const button = document.querySelector(".btn");
const title = document.querySelector(".title");

button.addEventListener("click", () => {
  gsap.to(title, {
    duration: 1.2,
    scrambleText: "WELCOME TO GSAP", 
  });
});
