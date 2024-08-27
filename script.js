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
      
      // apply mouseover listener and generate random color on each mouseover before appending to .container  
      square.addEventListener('mouseover', (e) => {
        if(e.shiftKey) {
            square.style.backgroundColor = 'rgb(255, 255, 255)';  
        } else if(!square.hasAttribute('color-applied')) {
            square.style.backgroundColor = randomColor();
            square.setAttribute('color-applied', 'true');
        }    
      });

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