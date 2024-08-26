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

console.log(divArray);
createGrid();