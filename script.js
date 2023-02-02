const SKETCH_AREA_DIMENSIONS = 16 * 16; // dimensions of the drawing space window, tightly coupled with .window--sketch-area dimensions, not responsive
let selectedColor = 'black'; // the default color of the pen
let oldSelectedColor = undefined, isRainbowMode = false; // storage variables to toggle on/off rainbow mode in toggleRainbowPen() function

const sketchArea = document.querySelector('.window--sketch-area');
const newGridButton = document.querySelector('.tile-menu__button--new-grid');
newGridButton.addEventListener('click', clearCanvas);
const colorPickerButton = document.querySelector('.tile-menu__button--color-picker');
colorPickerButton.addEventListener('click', colorPickerUI);
const rainbowToggleButton = document.querySelector('.tile-menu__button--rainbow-toggle');
rainbowToggleButton.addEventListener('click', toggleRainbowPen);

/* initialize the canvas grid tiles */
for (let i = 0; i < SKETCH_AREA_DIMENSIONS; i++)
{
    const newTile = document.createElement('div');
    newTile.setAttribute('class', 'window--sketch-area__tile');
    // set rounded borders to corner tiles
    if (i == 0)
        newTile.setAttribute('style', 'border-radius: 0.5rem 0 0 0;');
    else if (i == 15)
        newTile.setAttribute('style', 'border-radius: 0 0.5rem 0 0;');
    else if (i == 240)
        newTile.setAttribute('style', 'border-radius: 0 0 0 0.5rem;');
    else if (i == 255)
        newTile.setAttribute('style', 'border-radius: 0 0 0.5rem 0;');
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

/**
 * Prompts the user to type in a color to be used to paint the tiles.
 * NOTE: Toggles Rainbow Mode OFF.
 */
function colorPickerUI () {
    if (isRainbowMode) {
        toggleRainbowPen();
    }

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

/**
 * Toggles the Rainbow Pen mode.
 */
function toggleRainbowPen () {
    if (!isRainbowMode) {
        oldSelectedColor = selectedColor;

        const sketchArea = document.querySelector('.window--sketch-area');
        sketchArea.addEventListener('mousemove', randomizeSelectedColor);

        isRainbowMode = true;
    }
    else {
        const sketchArea = document.querySelector('.window--sketch-area');
        sketchArea.removeEventListener('mousemove', randomizeSelectedColor);

        selectedColor = oldSelectedColor;
        isRainbowMode = false;
    }
}

/**
 * Randomizes the current {selectedColor}.
 */
function randomizeSelectedColor () {
    selectedColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}