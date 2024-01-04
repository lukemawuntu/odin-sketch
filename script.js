getGridSize = +prompt('Choose gridsize', '16')

gridSize = getGridSize*getGridSize
for (let i = 0; i <gridSize ; i++) {
  const container=document.querySelector('.container');
  const gridElement = document.createElement('div')
  gridElement.classList.add('grid');
  gridElement.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
  container.appendChild(gridElement);
}