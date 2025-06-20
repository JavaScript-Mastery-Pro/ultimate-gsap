import gsap from "gsap";

const content = document.querySelector(".content section");

const cards = document.querySelectorAll(".card");
const cardsContainer = document.querySelector(".cards");

const detailPage = document.getElementById("detailPage");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailContent = document.getElementById("detailContent");

const closeBtn = document.getElementById("closeBtn");

const destinations = {
  1: {
    title: "Swiss Alps - Zermatt",
    description:
      "Experience the magic of the Swiss Alps with skiing, hiking, and cozy chalets in Zermatt. Perfect for adventure seekers and nature lovers alike.",
  },
  2: {
    title: "Mount Fuji - Japan",
    description:
      "Climb the iconic Mount Fuji and enjoy traditional Japanese culture, hot springs, and beautiful cherry blossoms along the way.",
  },
};

let cloneImg;
let tl;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const rect = img.getBoundingClientRect();
    const id = card.dataset.id;
    const { title, description } = destinations[id];

    // Clone image and set position
    cloneImg = img.cloneNode();
    document.body.appendChild(cloneImg);
    Object.assign(cloneImg.style, {
      position: "fixed",
      left: rect.left + "px",
      top: rect.top + "px",
      width: rect.width + "px",
      height: rect.height + "px",
      objectFit: "cover",
      borderRadius: "16px",
      zIndex: 1000,
      transition: "none",
    });

    const targetHeight = 300;

    // Start timeline
    tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });

    tl.to(
      content,
      {
        opacity: 0,
        duration: 0.4,
      },
      0
    );

    tl.to(
      cardsContainer,
      {
        opacity: 0,
        duration: 0.4,
      },
      0
    );

    tl.to(
      cloneImg,
      {
        top: 0,
        left: 0,
        width: "100vw",
        height: targetHeight,
        borderRadius: 0,
        duration: 0.8,
      },
      0
    );

    tl.add(() => {
      detailImage.src = img.src;
      detailTitle.textContent = title;
      detailDescription.textContent = description;
      detailPage.style.display = "flex";
      cloneImg.remove();
    });

    tl.fromTo(
      detailContent,
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "+=0.1"
    );
  });
});

closeBtn.addEventListener("click", () => {
  detailPage.style.display = "none";
  detailContent.style.opacity = 0;

  gsap.to(content, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  gsap.to(cardsContainer, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});
