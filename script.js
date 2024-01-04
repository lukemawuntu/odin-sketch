let getGridSize = 0;
let gridSize = 0;

function createGrid(){
  for (let i = 0; i <gridSize ; i++) {
    const container=document.querySelector('.container');
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid');
    gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
    container.appendChild(gridDiv);
  }
}

function randomInteger(){
  return Math.floor(Math.random(0,7)*10)
}
function toggleRainbow(){
  const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  return rainbow[randomInteger()]
}
function colorGrid(){
  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.style.backgroundColor = `${toggleRainbow()}`;
    });
  });
}

function changeSize(){
  getGridSize=+prompt("input grid size","16");
  gridSize = getGridSize*getGridSize;
  startSketch();
}

const btnChangeSize = document.querySelector('#changeSize');
btnChangeSize.addEventListener('click',changeSize);

function startSketch(){
  createGrid();
  colorGrid();
}


