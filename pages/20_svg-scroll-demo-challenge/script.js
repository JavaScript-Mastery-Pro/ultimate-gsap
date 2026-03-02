import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const paths = document.querySelectorAll(".ranbow-vertical__1-svg path");

gsap.set(paths, {
  strokeDashoffset: 0.001,
  strokeDasharray: "0px, 999999px",
});

// Assuming the first 9 are black, next 9 are color
const pairs = [];

// for first svg
for (let i = 0; i < paths.length / 2; i++) {
  const black = paths[i];
  const color = paths[i + paths.length / 2];
  pairs.push([black, color]);
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rainbow",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

pairs.forEach(([black, color], i) => {
  tl.to(
    [black, color],
    {
      strokeDashoffset: 0,
      strokeDasharray: "600px, 0.1px",
      duration: 1,
    },
    i * 0.1,
  );
});

// rotation animation on-scroll
const rotationTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".black-wrapper",
    start: "20% 70%",
    end: "75% center",
    scrub: 1,
  },
});

rotationTimeline
  .to(".side-images", {
    rotation: 0,
  })
  .to(
    ".side-images img",
    {
      rotation: -0,
    },
    "<",
  );

// for second svg
const paths2 = document.querySelectorAll(".ranbow-vertical__2-svg path");

gsap.set(paths2, {
  strokeDashoffset: 0.001,
  strokeDasharray: "0px, 999999px",
});

const pairs2 = [];

for (let i = 0; i < paths2.length / 2; i++) {
  const black = paths2[i];
  const color = paths2[i + paths2.length / 2];
  pairs2.push([black, color]);
}

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".transformed-rainbow",
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});

pairs2.forEach(([black, color], i) => {
  tl2.to(
    [black, color],
    {
      strokeDashoffset: 0,
      strokeDasharray: "600px, 0.1px",
      duration: 1,
    },
    i * 0.1,
  );
});

// rainbow-sides svgs animations

const leftPaths = document.querySelectorAll(".rainbow-sides__left path");
const rightPaths = document.querySelectorAll(".rainbow-sides__right path");

gsap.set(leftPaths, {
  strokeDashoffset: 0,
  strokeDasharray: "809.204px, 0.1px",
});

gsap.set(rightPaths, {
  strokeDashoffset: 0,
  strokeDasharray: "809.204px, 0.1px",
});

const leftPairs = [];
const rightPairs = [];

for (let i = 0; i < leftPaths.length / 2; i++) {
  const black = leftPaths[i];
  const color = leftPaths[i + leftPaths.length / 2];
  leftPairs.push([black, color]);
}

for (let i = 0; i < rightPaths.length / 2; i++) {
  const black = rightPaths[i];
  const color = rightPaths[i + rightPaths.length / 2];
  rightPairs.push([black, color]);
}

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".rainbow-sides-container",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

leftPairs.forEach(([black, color], i) => {
  tl3.to(
    [black, color],
    {
      strokeDashoffset: 0.001,
      strokeDasharray: "0px, 999999px",
      duration: 2,
    },
    i * 0.2, // change this value to adjust the speed
  );
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".rainbow-sides__right",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    // pin: true,
    // markers: true,
  },
});

rightPairs.forEach(([black, color], i) => {
  tl4.to(
    [black, color],
    {
      strokeDashoffset: 0.001,
      strokeDasharray: "0px, 999999px",
      duration: 2,
    },
    i * 0.2, // change this value to adjust the speed
  );
});
