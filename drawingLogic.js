//Select all blocks in the grid and allow drawing
let gridBlocks;

configureDrawing();
function configureDrawing() {
  gridBlocks = document.querySelectorAll(".grid-item");
  gridBlocks.forEach((gridBlock) =>
    gridBlock.addEventListener("mouseover", changeColor)
  );
  gridBlocks.forEach((gridBlock) =>
    gridBlock.addEventListener("mousedown", changeColor)
  );
}

let trigger = false;


//if mouse is up disable drawing
window.addEventListener("mouseup", () => (trigger = false));

//If mouse down and is over, then draw
function changeColor(e) {
  if (e.type == "mousedown") {
    trigger = true;
  }
  if (trigger == true) {
    this.style.backgroundColor = pencilColor;
  }
}
