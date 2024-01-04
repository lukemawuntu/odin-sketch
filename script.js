let getGridSize = 0;
let gridSize = 0;
let isRainbow = false;
let isBlack = false;

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

function toggleRainbow(){
  const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  return rainbow[randomInteger()]
}

function toggleBlack(){
  return 'black';
}

const rainbow = document.querySelector("#rainbow")
rainbow.addEventListener('click',()=>{
  isRainbow = true;
})

const black = document.querySelector("#black")
black.addEventListener('click',()=>{
  isBlack = true;
})

function colorGrid(){
  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      if (isRainbow==true) {
        gridElement.style.backgroundColor = `${toggleRainbow()}`;
      };
      if (isBlack==true) {
        gridElement.style.backgroundColor = `${toggleBlack()}`;
      };
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


