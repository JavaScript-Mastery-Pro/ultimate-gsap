import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const video = document.querySelector("#scrollVideo");

  if (!video) {
    console.error("Video not found");
    return;
  }

  function setupScroll() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#nextGenGame",
        start: "top top",
        end: "+=1000%",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    tl.to(video, {
      currentTime: video.duration,
      ease: "none",
    });

    ScrollTrigger.refresh();
  }

  if (video.readyState >= 2) {
    setupScroll();
  } else {
    video.addEventListener("loadeddata", setupScroll);
  }

  // optional kickstart
  video.currentTime = 0.01;
});
