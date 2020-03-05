//function that creates grid 
function createGrid(dimension) {
    let container = document.querySelector('#gridContainer');
    for (i = 0; i < dimension; i++) { 
        let gridCell = document.createElement('div');
        gridCell.className = 'gridCell';
        container.appendChild(gridCell);
    }
}

//function that deletes grid 
function deleteGrid() {
    let container = document.querySelector('#gridContainer');
    let cells = document.querySelectorAll('div.gridCell');
    for (i = cells.length-1; i >= 0; i--) { 
        container.removeChild(container.childNodes[i]);
    }
}

//creates initial grid
let gridWidth = 16;
let gridSize = gridWidth*gridWidth;
createGrid(gridSize);
mouseOver();

//adds mouseover effect
function mouseOver() {
let cells = document.querySelectorAll('div.gridCell');
cells.forEach((div) => { 
    div.addEventListener('mouseover', (e) => {
       div.classList.add('draw');
    });
});
}

//adds ability to reset grid size with button.
function gridPrompt() {
         gridWidth = prompt('Please define drawing board dimensions between 2 and 150:', '16');
         while (isNaN(gridWidth) || gridWidth < 2 || gridWidth > 150 ) {
             gridWidth = prompt('Invalid entry! Please define drawing board dimensions between 2 and 150:', '16');
         }
         let gridSize = gridWidth*gridWidth;
         document.querySelector('#gridContainer').style.setProperty('--colNum', gridWidth);
         createGrid(gridSize);
}

//creates new resized grid upon click
let clearButton = document.querySelector('#clearGrid');
clearButton.addEventListener('click', (e) => {
deleteGrid(gridSize);
gridPrompt();
mouseOver();
 });

