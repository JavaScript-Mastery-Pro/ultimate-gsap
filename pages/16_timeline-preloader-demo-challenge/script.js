import gsap from "gsap";

const timeline = gsap.timeline();

timeline
  .to(".preloader h1 span", {
    opacity: 1,
    stagger: 1,
    ease: "power1.inOut",
  })
  .to(".overlay", {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    duration: 1,
    ease: "power1.out",
  })
  .from(
    ["nav .links", "nav p"],
    {
      yPercent: -100,
      ease: "power1.out",
    },
    "<",
  )
  .from(
    ".logo > *",
    {
      yPercent: -120,
      stagger: {
        each: 0.07,
        from: "end",
      },
      ease: "power1.out",
    },
    "<",
  );
