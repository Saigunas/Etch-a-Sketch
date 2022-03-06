const gridContainer = document.querySelector(".grid-container");
const gridBackground = document.querySelector(".grid-background");

gridBackground.style.backgroundColor = gridBackgroundColor;
gridContainer.style.gridTemplateColumns = `repeat(${gridItems}, auto)`;
gridContainer.style.gridGap = `${gridGapWidth}px`;

        //Create grid items
for(let i = 0; i < gridItems * gridItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.style.padding = gridItemWidth;
    
    gridContainer.appendChild(gridItem);
}
