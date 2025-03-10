function findMedian(arr){
    arr.sort((a,b) => a - b);
    let n = arr.length;

    let mid = Math.floor(n / 2);

    if(n % 2 !== 0){
        return arr[mid]
    }else{
        return Math.floor((arr[mid - 1] + arr[mid]) / 2);
    }
}

console.log(findMedian([7, 1, 3, 4 ,5, 6,8]));
console.log(findMedian([5, 2, 1, 3, 4])); 