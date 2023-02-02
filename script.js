const SKETCH_AREA_DIMENSIONS = 16 * 16; // dimensions of the drawing space window, tightly coupled with .window--sketch-area dimensions, not responsive
let selectedColor = 'black';

const sketchArea = document.querySelector('.window--sketch-area');
const newGridButton = document.querySelector('.tile-menu__button--new-grid');
newGridButton.addEventListener('click', clearCanvas);
const colorPickerButton = document.querySelector('.tile-menu__button--color-picker');
colorPickerButton.addEventListener('click', colorPickerUI);

/* initialize the canvas grid tiles */
for (let i = 0; i < SKETCH_AREA_DIMENSIONS; i++)
{
    const newTile = document.createElement('div');
    newTile.setAttribute('class', 'window--sketch-area__tile');
    newTile.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = selectedColor;
    });

    sketchArea.appendChild(newTile);
}

/**
 * Clears the canvas.
 */
function clearCanvas () {
    const tilesList = document.querySelectorAll('.window--sketch-area__tile');
    tilesList.forEach((e) => e.style.backgroundColor = ''); // reset the backgroundColor to CSS specifications
}

function colorPickerUI () {
    let inputtedColor = prompt('What color do you want to paint with?', 'black');
    changePenColor(inputtedColor);
}

/**
 * Changes the behavior of the canvas tiles to have a new specified {color} when hovered.
 * 
 * @param {string} color - the specified color to have when you hover on a canvas tile.
 */
function changePenColor (color) {
    selectedColor = color;
}