function lonelyInteger(arr){
    let lonelyInt = 0;

    for(let num of arr){
        lonelyInt ^= num
    }
    return lonelyInt
}
console.log(lonelyInteger([1,2,3,4,3,2,1]));