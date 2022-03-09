let gridItems;
let minGridItems;
let maxGridItems;
let gridWidth;
let gridDefaultGapWidth;
let gridGapWidth;
let gridBordersColor;
let gridItemBackgroundColor;
let pencilColor;
let pencilColorErase;
let rainbowPen;
let gridItemWidth;
let gridBorderOn;
initializeToDefault();

function initializeToDefault(itemToDefault = '') {
  if(itemToDefault == 'grid') {
    gridGapWidth = 2;
    return;
  }

  gridBorderOn = false;
  showGridBorder(gridBorderOn);

  gridItems = 20;
  minGridItems = 1;
  maxGridItems = 40;
  gridWidth = 250;
  gridBordersColor = "rgb(186, 247, 226)";
  gridItemBackgroundColor = "rgb(242, 242, 242)";
  pencilColor = "#8f8f8f";
  pencilColorErase = 'rgba(143, 143, 143, 0.5)';
  rainbowPen = false;
  gridItemWidth = calculateBlockW();
}

function showGridBorder(arg) {
  if(arg == true) {
    initializeToDefault('grid')
  } else {
    gridGapWidth = 0;
  }
}

function calculateBlockW() {
  /*  
        Calculate block width so wanted grid width is
        absolute, no less, no more.
    */

  let gridWidthNoGap; //Minus one as there is no gap after last block in line
  gridWidthNoGap = gridWidth - gridGapWidth * (gridItems - 1);
  //Devided because block padding starts from center to sides,
  //thus creating double of the width we want
  let blockWidth = gridWidthNoGap / gridItems / 2;
  return `${blockWidth}px`;
}


//Doesn't allow client to drag the image,
//thus not messing up drawing.
window.ondragstart = function () {
  return false;
};
