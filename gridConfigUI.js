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
        gridItemWidth = calculateBlockW();
        deleteGrid();
        createGrid();
        configureDrawing();
        configureSlider();
    });