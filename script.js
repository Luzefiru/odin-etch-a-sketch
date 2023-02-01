const SKETCH_AREA_DIMENSIONS = 16 * 16; // dimensions of the drawing space window, tightly coupled with .window--sketch-area dimensions, not responsive
let selectedColor = 'red';

const sketchArea = document.querySelector('.window--sketch-area');
const newGridButton = document.querySelector('.button--new-grid');
newGridButton.addEventListener('click', clearCanvas);

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

/* clears the canvas */
function clearCanvas () {
    const tilesList = document.querySelectorAll('.window--sketch-area__tile');
    tilesList.forEach((e) => e.style.backgroundColor = ''); // reset the backgroundColor to CSS specifications
}