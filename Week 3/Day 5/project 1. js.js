 //////////////////////////////grid = document.getElementById('grid');
const paletteSquares = document.querySelectorAll('#palette div');

// 1. Fill the grid with squares dynamically
for (let i = 0; i < 2400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Start coloring on click
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = selectedColor;
    });

    // Continue coloring on drag
    square.addEventListener('mouseover', () => {
        if (isDrawing) {
            square.style.backgroundColor = selectedColor;
        }
    });

    grid.appendChild(square);
}

// 2. Stop coloring when mouse is released anywhere
window.addEventListener('mouseup', () => {
    isDrawing = false;
});