// // generate original 16x16 grid

// const gridContainer = document.getElementById('grid-container');
// const divArray = [];

// function createGrid() {
//     for (let i = 0; i < 256; i++) {
//        divArray.push(`gridDiv${i + 1}`);
        
//     };
//     divArray.forEach((div) => {
//         const gridElement = document.createElement('div');
//         gridElement.className = 'grid-item';
//         gridContainer.appendChild(gridElement);
//         gridElement.textContent = divArray.indexOf(div) + 1;
//     });
// }

// createGrid();

// // create (and erase) mouseover trail 

// const gridElement = document.querySelectorAll('.grid-item');

// gridElement.forEach((element) => {
//     element.addEventListener('mouseover', (e) => {
//         if (e.shiftKey) {
//             element.classList.replace('grid-item-trail', 'grid-item');
//         } else {
//             element.classList.replace('grid-item', 'grid-item-trail');
//         }   
//     })
// })


// Function to generate an x by x grid of square divs
function generateGrid(x) {
    // Clear any existing grid items
    const gridContainer = document.getElementById('grid-container');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    } 
    
    // Calculate the size of each square based on the number of columns (100% / x)
    const squareSize = `calc(100% / ${x} - 2px)`; // -2px accounts for the margin
    
    // Create x * x square divs and append them to the container
    for (let i = 0; i < x * x; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = squareSize;
      square.style.height = squareSize;
      gridContainer.appendChild(square);
    //   square.textContent = i + 1;
    }
    // create (and erase) mouseover trail 
    const gridElement = document.querySelectorAll('.square');

    gridElement.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            if (e.shiftKey) {
                element.classList.replace('square-trail', 'square');
            } else {
                element.classList.replace('square', 'square-trail');
            }   
        })
    })
  }

// generate 16x16 on load
  generateGrid(16);


// generate new grid button  
const newGridBtn = document.getElementById('new-grid-btn');

function xByGrid () {
    const num = prompt("Enter a number between 4 and 100")
    if (num > 100 || num < 4) {
        alert("Choose a number between 4 and 100")
    } else {
        generateGrid(num);
    }
}



newGridBtn.addEventListener('click', xByGrid);