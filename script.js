// random color generator
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function generateNewColor () {
    const root = document.querySelector(':root');
    // update color
    root.style.setProperty('--trail-bg-color', randomColor());
    // get current color
    let cc = getComputedStyle(root);
    let currentColor = cc.getPropertyValue('--trail-bg-color');
    console.log(currentColor);
}

// Function to generate an x * x grid of square divs
function generateGrid(num) {
    // Clear any existing grid items
    const gridContainer = document.getElementById('grid-container');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    } 
    
    // Calculate the size of each square based on the number of columns (100% / x)
    const squareSize = `calc(100% / ${num} - 2px)`; // -2px accounts for the margin
    
    // Create x * x square divs and append them to the container
    for (let i = 0; i < num * num; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = squareSize;
      square.style.height = squareSize;
      gridContainer.appendChild(square);
      square.id = i + 1;
    }
    // create (and erase) mouseover trail     
    const gridElement = document.querySelectorAll('.square');
    gridElement.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            generateNewColor();    
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