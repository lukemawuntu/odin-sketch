let getGridSize = 0;
let gridSize = 0;
let isRainbow = true;
let isBlack = true;

function createGrid(){
  const container=document.querySelector('.container');
  container.innerHTML ='';
  for (let i = 0; i <gridSize ; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid');
    gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
    container.appendChild(gridDiv);
  }
}

function randomInteger(){
  return Math.floor(Math.random(0,7)*10)
}

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
    });
  });
});

