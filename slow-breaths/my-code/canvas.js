const canvas = document.querySelector(".canvas");
const sandbox = new GlslCanvas(canvas);

sandbox.load(frag);
sandbox.setUniform("displacement", "./assets/displacement2.png");

let state = true;

canvas.addEventListener("click", () => {
  if (state) {
    sandbox.setUniform("displacement", "./assets/displacement1.jpg");
    state = false;
    return;
  }

  sandbox.setUniform("displacement", "./assets/displacement2.png");
  state = true;
  return;
});
