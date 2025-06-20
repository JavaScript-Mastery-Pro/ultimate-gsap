import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];

const chart = document.getElementById("chart");

const chartHeight = chart.clientHeight;

const barWidth = 50;
const spacing = 25;
const maxValue = Math.max(...data.map((d) => d.value));

function renderChart() {
  data.forEach((item, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    wrapper.style.width = `${barWidth}px`;

    const bar = document.createElement("div");
    bar.className = "bar";
    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    bar.style.height = `${barHeight}px`;

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.label;

    wrapper.appendChild(bar);
    wrapper.appendChild(label);
    chart.appendChild(wrapper);

    // animate with bounce
    gsap.to(bar, {
      scaleY: 1,
      duration: 1,
      ease: "elastic.out(1, 1.25)",
      delay: i * 0.1,
    });
  });
}

repeat.addEventListener("click", () => {
  chart.innerHTML = "";
  renderChart();
});

renderChart();
