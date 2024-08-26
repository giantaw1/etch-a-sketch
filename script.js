// generate original 16x16 grid

const gridContainer = document.getElementById('grid-container');
const divArray = [];

function createGrid() {
    for (let i = 0; i < 256; i++) {
       divArray.push(`gridDiv${i + 1}`);
        
    };
    divArray.forEach((div) => {
        const gridElement = document.createElement('div');
        gridElement.className = 'grid-item';
        gridContainer.appendChild(gridElement);
        gridElement.textContent = divArray.indexOf(div) + 1;
    });
}

createGrid();

// create (and erase) mouseover trail 

const gridElement = document.querySelectorAll('.grid-item');

gridElement.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
        if (e.shiftKey) {
            element.classList.replace('grid-item-trail', 'grid-item');
        } else {
            element.classList.replace('grid-item', 'grid-item-trail');
        }   
    })
})

// generate new grid from prompt (100x100 max)