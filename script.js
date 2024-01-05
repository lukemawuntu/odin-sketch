
const changeSize = document.querySelector('#changeSize')
changeSize.addEventListener('click',()=>{
  const container=document.querySelector('.container');
  container.innerHTML='';
  for (let i = 0; i <gridSize ; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid');
    gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
    container.appendChild(gridDiv);
  };
});

let getGridSize = +prompt('Choose gridsize', '16')

const gridSize = getGridSize*getGridSize
for (let i = 0; i <gridSize ; i++) {
  const container=document.querySelector('.container');
  const gridDiv = document.createElement('div')
  gridDiv.classList.add('grid');
  gridDiv.style.cssText=`height: ${400/getGridSize}px; width: ${400/getGridSize}px`;
  container.appendChild(gridDiv);
};

const gridElements = document.querySelectorAll('.grid');
const rainbow = document.querySelector('#rainbow')
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
function randomInteger(){
  return Math.floor(Math.random()*7);
}

rainbow.addEventListener('click',()=>{
  gridElements.forEach((gridElement)=>{
    gridElement.addEventListener('mouseover',()=>{  
      gridElement.style.backgroundColor =`${rainbowColors[randomInteger()]}`;
    });
  });
});

const black = document.querySelector('#black')
black.addEventListener('click',()=>{
  gridElements.forEach((gridElement)=>{
    gridElement.addEventListener('mouseover',()=>{
      gridElement.style.backgroundColor ='black';
    });
  });
});


