const changeSize = document.querySelector('#changeSize');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');

changeSize.addEventListener('click', start);
black.addEventListener('click', toggleBlack);
rainbow.addEventListener('click', toggleRainbow);

function changeSizeFunc() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  let getGridSize = +prompt('Choose grid size', '16');

  const gridSize = getGridSize * getGridSize;
  for (let i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.style.cssText = `height: ${400 / getGridSize}px; width: ${400 / getGridSize}px`;
    container.appendChild(gridDiv);
  }

  // Return the grid elements to be used in other functions
  return document.querySelectorAll('.grid');
}

function start() {
  const gridElements = changeSizeFunc();
  toggleBlack(gridElements);
  toggleRainbow(gridElements);
}

<<<<<<< HEAD
function changeSize(){
  getGridSize=+prompt("input grid size","16");
  gridSize = getGridSize*getGridSize;
}

const btnChangeSize = document.querySelector('#changeSize');
btnChangeSize.addEventListener('click', ()=>{
  changeSize();
  createGrid();
  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.style.backgroundColor = 'black';
    });
  });
});

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener('click', ()=>{
  changeSize();
  createGrid();
  const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.style.backgroundColor = `${rainbowColors[randomInteger()]}`;
    });
  });
});

const black = document.querySelector("#black");
black.addEventListener('click', ()=>{
  changeSize();
  createGrid();
  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.style.backgroundColor = 'black';
=======
function toggleBlack(elements) {
  black.addEventListener('click', () => {
    elements.forEach((gridElement) => {
      gridElement.addEventListener('mouseover', () => {
        gridElement.style.backgroundColor = 'black';
      });
>>>>>>> old-sketch
    });
  });
}


function randomInteger(){
  return Math.floor(Math.random()*7);
}

function toggleRainbow(elements) {
  const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  rainbow.addEventListener('click', () => {
    elements.forEach((gridElement) => {
      gridElement.addEventListener('mouseover', () => {
        gridElement.style.backgroundColor = `${rainbowColors[randomInteger()]}`;
      });
    });
  });
}
