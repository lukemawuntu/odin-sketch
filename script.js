let getGridSize = +prompt('Choose gridsize', '16')

const gridSize = getGridSize*getGridSize
for (let i = 0; i <gridSize ; i++) {
  const container=document.querySelector('.container');
  const gridDiv = document.createElement('div')
  gridDiv.classList.add('grid');
  gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
  container.appendChild(gridDiv);
}

const gridElements = document.querySelectorAll('.grid');
gridElements.forEach((gridElement)=>{
  gridElement.addEventListener('mouseover',(e)=>{
    gridElement.style.backgroundColor ='yellow';
  });
});



