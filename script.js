let getGridSize = 0;
let gridSize = 0;

function changeSize(){
  getGridSize=+prompt("input grid size","16");
  gridSize = getGridSize*getGridSize;
  createGrid();
}

const btnChangeSize = document.querySelector('#changeSize');
btnChangeSize.addEventListener('click',changeSize);

function createGrid(){
  const container=document.querySelector('.container');
  for (let i = 0; i <gridSize ; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid');
    gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
    container.appendChild(gridDiv);
  }

  const gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', (e) => {
      gridElement.style.backgroundColor = 'yellow';
    });
  });
}


