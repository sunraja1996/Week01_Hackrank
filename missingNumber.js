function missingNumber(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let fullNumberwithMissing = Array.from({length:max - min + 1}, (_,i) => (i + min));
    let missingNum = fullNumberwithMissing.filter(num => !arr.includes(num));

    console.log(fullNumberwithMissing);
    console.log(missingNum);
}

let arr = [10, 6, 1, 4, 2, 9, 7];
missingNumber(arr);