let gridItems = 20;
let gridWidth = 300;
let gridGapWidth = 1;
let gridBackgroundColor = "rgb(186, 247, 226)";
let pencilColor = 'grey';

let gridItemWidth = calculateBlockW();

function calculateBlockW() {
    /*  
        Calculate block width so wanted grid width is
        absolute, no less, no more.
    */

    let gridWidthNoGap;     //Minus one as there is no gap after last block in line
    gridWidthNoGap = gridWidth - (gridGapWidth) * (gridItems - 1);
                            //Devided because block padding starts from center to sides,
                            //thus creating double of the width we want
    let blockWidth = (gridWidthNoGap / gridItems) / 2;
    return `${blockWidth}px`
}