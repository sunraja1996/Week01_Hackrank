function diagonalDifference(arr){
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++){
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i]
    }
    return Math.abs(leftDiagonal - rightDiagonal)
}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
console.log(diagonalDifference(arr));

