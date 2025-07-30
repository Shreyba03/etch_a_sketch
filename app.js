const container = document.getElementById('container');

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960/size;

  for (let i = 0; i < size * size; ++i) {
    const div = document.createElement("div");
    div.classList.add('grid-square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div);
  }

  addHoverEffect();
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = 'white';
    });
  });

  squares.forEach(square => {
    square.addEventListener("mouseleave", () => {
      square.style.backgroundColor = 'black';
    });
  });
}

createGrid(6);