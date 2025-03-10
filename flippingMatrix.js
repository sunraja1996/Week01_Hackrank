function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let maxVal = Math.max(
                matrix[i][j], 
                matrix[i][2 * n - j - 1], 
                matrix[2 * n - i - 1][j], 
                matrix[2 * n - i - 1][2 * n - j - 1]
            );
            maxSum += maxVal;
        }
    }
    return maxSum;
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let matrix1 = [
    [1, 2],
    [3, 4]
];

console.log(flippingMatrix(matrix)); 
console.log(flippingMatrix(matrix1)); 
