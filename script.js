const gridContainer = document.getElementById('grid-container');
const divArray = [];

function createGrid() {
    for (let i = 0; i < 16; i++) {
       divArray.push(`gridDiv${i + 1}`);
        
    };
    divArray.forEach((div) => {
        const gridElement = document.createElement('div');
        gridElement.className = 'grid-item';
        gridContainer.appendChild(gridElement);
    });
}

console.log(divArray);
createGrid();