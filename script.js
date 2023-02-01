const SKETCH_AREA_DIMENSIONS = 16 * 16;

const sketchArea = document.querySelector('.window--sketch-area');


for (let i = 0; i < SKETCH_AREA_DIMENSIONS; i++)
{
    const newTile = document.createElement('div');
    newTile.setAttribute('class', 'window--sketch-area__tile');
    sketchArea.appendChild(newTile);
}
