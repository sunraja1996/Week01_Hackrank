function miniMaxSum(arr){

    arr.sort((a,b) => a - b)  // sorting the array values

    let min = arr.slice(0,4).reduce((a,b) => a + b,0) // sum of 0th index value to 4th index value
    let max = arr.slice(1,5).reduce((a,b) => a + b,0) // sum of 1st index value to 5th index value

    console.log(max ,min);
}
miniMaxSum([1, 2, 5, 4, 3]);