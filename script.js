// random color generator (returns RGB CSS styling)
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

// Function to generate an x * x grid of square divs
function generateGrid(num) {
    // Clear any existing grid items (does NOT use innerHTML)
    const gridContainer = document.getElementById('grid-container');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }; 
    
    // Calculate the size of each square based on the number of columns (100% / x)
    const squareSize = `calc(100% / ${num} - 2px)`; // -2px accounts for the margin

    // Create x * x square divs and append them to the container
    for (let i = 0; i < num * num; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = squareSize;
      square.style.height = squareSize;
      
      // apply mouseover listener colorizing function  
      square.addEventListener('mouseover', (e) => {
        if (e.shiftKey) {
            square.style.backgroundColor = 'rgb(255, 255, 255)';
            square.removeAttribute('color-applied');  
        } else if (!square.hasAttribute('color-applied')) {
            square.style.backgroundColor = randomColor();
            square.setAttribute('color-applied', 'true');
        };
      });
      // apply mouseover darkening function
      let brightnessLevel = 1;
      square.addEventListener('mouseover', (e) => {
        if (square.hasAttribute('color-applied') && brightnessLevel > 0) {
            brightnessLevel -= 0.1;
            square.style.filter = `brightness(${brightnessLevel})`;
            if (brightnessLevel <= 0) {
                square.style.filter = `brightness(0)`;
            }
        } else if (e.shiftKey) {
            square.style.filter = `brightness(1)`;
        }
      })
    
      gridContainer.appendChild(square);
    } 
    // show current grid size in 'header'
    const gridSize = document.querySelector('.current-grid-size');
    gridSize.textContent = `${num} x ${num}`;
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