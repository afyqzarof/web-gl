const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

const calcSize = () => {
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let dpi = window.devicePixelRatio;

  let s = Math.max(ww, wh);
  canvas.width = s * dpi;
  canvas.height = s * dpi;
  canvas.style.width = s + "px";
  canvas.style.height = s + "px";
};

calcSize();

window.addEventListener("resize", () => {
  calcSize;
});

sandbox.load(frag);
let current = 0;
const images = ["colors.jpeg", "colors2.jpeg", "colors3.jpeg"];

canvas.addEventListener("click", () => {
  current += 1;

  if (current > images.length - 1) {
    current = 0;
  }
  sandbox.setUniform("image", `./assets/${images[current]}`);
});

sandbox.setUniform("image", `./assets/${images[current]}`);
