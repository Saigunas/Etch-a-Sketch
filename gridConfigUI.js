const pixelNumber = document.querySelector(".pixel-number");
pixelNumber.addEventListener('change', (e) =>
    {   
        //check if number is not out of bounds
        if(e.target.value > maxGridItems) {
            e.target.value = maxGridItems;
        }
        if(e.target.value < minGridItems) {
            e.target.value = minGridItems;
        }
        if(e.target.value == gridItems) {
            return;
        }
        //recreate grid
        gridItems = e.target.value;
        resetGrid();
    });

let gridBorderCheckbox = document.querySelector(".grid-border-checkbox");
gridBorderCheckbox.addEventListener('change', function() {
    if (this.checked) {
        showGridBorder(true);
      } else {
        showGridBorder(false);
    }
    resetGrid();
    });

let penColor = document.querySelector(".pen-color");
penColor.addEventListener("change", 
    function(event) {
        pencilColor = event.target.value;
  });


let penColorRainbow = document.querySelector(".pen-color-rainbow");
penColorRainbow.addEventListener('change', function() {
    if (this.checked) {
        rainbowPen = true;
      } else {
        rainbowPen = false;
        pencilColor = penColor.value;
    }
    }); 

let resetSettings = document.querySelector('.reset-settings');
resetSettings.addEventListener('click', function() {
    initializeToDefault();
    initializeUI();
    resetGrid();
})

initializeUI();

function initializeUI() {
    pixelNumber.value = gridItems;
    gridBorderCheckbox.checked = gridBorderOn;  
    penColor.value = pencilColor;
    penColorRainbow.checked = rainbowPen;
}