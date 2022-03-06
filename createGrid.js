const gridContainer = document.querySelector(".grid-container");
const gridBackgroundBorder = document.querySelector(".grid-background");

gridBackgroundBorder.style.backgroundColor = gridBordersColor;
gridContainer.style.gridTemplateColumns = `repeat(${gridItems}, auto)`;
gridContainer.style.gridGap = `${gridGapWidth}px`;

//Create grid items
for (let i = 0; i < gridItems * gridItems; i++) {
  //This will have default background color behind each grid item
  //Needed for after grid items color erasure
  const gridItemBackground = document.createElement("div");
  gridItemBackground.style.backgroundColor = gridItemBackgroundColor;

  //Blocks start with the dafault color
  const gridItem = document.createElement("div");
  gridItem.style.backgroundColor = gridItemBackgroundColor;

  gridItem.classList.add("grid-item");
  gridItem.style.padding = gridItemWidth;

  //setting coordinates so slider can erase specific blocks
  let coordinates = `${i % gridItems}, ${Math.floor(i / gridItems)}`;
  gridItem.setAttribute("data-coordinates", coordinates);

  gridContainer.appendChild(gridItemBackground);
  gridItemBackground.appendChild(gridItem);
}

//slider
const gridSlider = document.querySelector(".grid-slider");

gridSlider.style.width = `${gridWidth}px`;
gridSlider.max = gridItems;

//When input detected on slider, find the blocks based on sliders value
//And halve the opacity for the magnetic board affect
gridSlider.oninput = function () {
  for (let i = 0; i < gridItems; i++) {
    let blockToErase = document.querySelector(
      `.grid-item[data-coordinates="${this.value}, ${i}"]`
    );

    if (blockToErase.style.backgroundColor == gridItemBackgroundColor) {
      continue;
    }

    let opacityHalf =
      blockToErase.style.backgroundColor == `rgba(${pencilColorRgb}, 0.5)`;

    if (opacityHalf) {
      blockToErase.style.backgroundColor = gridItemBackgroundColor;
    } else {
      blockToErase.style.backgroundColor = `rgba(${pencilColorRgb}, 0.5)`;
    }
  }
};
