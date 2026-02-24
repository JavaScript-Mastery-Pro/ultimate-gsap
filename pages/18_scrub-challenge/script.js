import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const element = document.getElementById("line1");

gsap.to(element, {
  scrollTrigger: {
    trigger: element.parentElement,
    start: "top bottom",
    end: "bottom top",
    scrub: true,

    onUpdate: (self) => {
      // 1 = scrolling down, -1 = scrolling up
      const direction = self.direction === 1 ? -1 : 1;

      gsap.to(element, {
        x: `+=${50 * direction}`,
        duration: 0.8,
        ease: "none",
      });
    },
  },
});

const element2 = document.getElementById("line2");

gsap.to(element2, {
  scrollTrigger: {
    trigger: element2.parentElement,
    start: "top bottom",
    end: "bottom top",
    scrub: true,

    onUpdate: (self) => {
      // 1 = scrolling down, -1 = scrolling up
      const direction = self.direction === 1 ? -1 : 1;

      gsap.to(element2, {
        x: `-=${50 * direction}`,
        duration: 0.8,
        ease: "none",
      });
    },
  },
});

const element3 = document.getElementById("line3");

gsap.to(element3, {
  scrollTrigger: {
    trigger: element3.parentElement,
    start: "top bottom",
    end: "bottom top",
    scrub: true,

    onUpdate: (self) => {
      // 1 = scrolling down, -1 = scrolling up
      const direction = self.direction === 1 ? -1 : 1;

      gsap.to(element3, {
        x: `+=${50 * direction}`,
        duration: 0.8,
        ease: "none",
      });
    },
  },
});
