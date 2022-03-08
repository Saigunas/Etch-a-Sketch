const gridContainer = document.querySelector(".grid-container");
const gridBackgroundBorder = document.querySelector(".grid-background");

gridBackgroundBorder.style.backgroundColor = gridBordersColor;

createGrid();
//Create grid items
function createGrid() {

    //configure grid
    gridContainer.style.gridTemplateColumns = `repeat(${gridItems}, auto)`;
    gridContainer.style.gridGap = `${gridGapWidth}px`;

    for (let i = 0; i < gridItems * gridItems; i++) {
        //This will have default background color behind each grid item
        //Needed for after grid items color erasure
        const gridItemBackground = document.createElement("div");
        gridItemBackground.classList.add("grid-item-background");
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
}

function deleteGrid() {
    const elements = document.getElementsByClassName('grid-item');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    const elements2 = document.getElementsByClassName('grid-item-background');
    while(elements2.length > 0){
        elements2[0].parentNode.removeChild(elements2[0]);
    }
}

//slider
const gridSlider = document.querySelector(".grid-slider");

configureSlider();
function configureSlider() {
    gridSlider.style.width = `${gridWidth}px`;
    gridSlider.max = gridItems;
    gridSlider.value = -1;
}


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
