function plusMinus(arr){
    // initially set values as zero
    let positive = 0;
    let negative = 0;
    let zero = 0;
    // assign a variable for arr length
    let n = arr.length;

    // iterating array 
    for( let i = 0; i <= n; i++){
        if(arr[i] > 0){  // arr[0] == 1 => postive values  
            positive++   // is its positive value add 1 if its more than 1 => it adds
        }else if(arr[i] < 0) { // if arr[0] less that 0 => getting negative values
            negative++
        }else if(arr[i] == 0){ // getting zero values
            zero++    
        }
    }
    let positiveCount = (positive / n).toFixed(6);
    let negativeCount = (negative / n).toFixed(6);
    let zeroCount = (zero / n).toFixed(6);

    console.log(positiveCount);
    console.log(negativeCount);
    console.log(zeroCount);
}

plusMinus([-4, 3, -9, 0, 4, 1]) 
plusMinus([1, 1, 0, -1, -1])