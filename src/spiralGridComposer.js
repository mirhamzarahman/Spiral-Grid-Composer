/**
 * Spiral Grid Composer
 *
 * Generates an N × N grid by filling values
 * in a clockwise spiral order.
 */

/**
 * Creates a spiral matrix.
 *
 * @param {number} size - Dimension of the square grid.
 * @returns {number[][]} Spiral-filled matrix.
 */
function createSpiralGrid(size) {
    const grid = Array.from({ length: size }, () => Array(size).fill(0));

    let topBoundary = 0;
    let bottomBoundary = size - 1;
    let leftBoundary = 0;
    let rightBoundary = size - 1;

    let currentValue = 1;

    while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {

        // Fill top row
        for (let column = leftBoundary; column <= rightBoundary; column++) {
            grid[topBoundary][column] = currentValue++;
        }
        topBoundary++;

        // Fill right column
        for (let row = topBoundary; row <= bottomBoundary; row++) {
            grid[row][rightBoundary] = currentValue++;
        }
        rightBoundary--;

        // Fill bottom row
        if (topBoundary <= bottomBoundary) {
            for (let column = rightBoundary; column >= leftBoundary; column--) {
                grid[bottomBoundary][column] = currentValue++;
            }
            bottomBoundary--;
        }

        // Fill left column
        if (leftBoundary <= rightBoundary) {
            for (let row = bottomBoundary; row >= topBoundary; row--) {
                grid[row][leftBoundary] = currentValue++;
            }
            leftBoundary++;
        }
    }

    return grid;
}

// Example usage
const gridSize = 4;
const spiralGrid = createSpiralGrid(gridSize);

console.log(`Spiral Grid (${gridSize} × ${gridSize})`);
console.table(spiralGrid);
