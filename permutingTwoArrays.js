function permutingTwoArrays(k , A, B){
    let a = A.length;
    
    A.sort((a,b) => a - b); // Asc
    B.sort((a,b) => b - a); // Des

    for(let i = 0; i < a; i++){
        if(A[i] + B[i] < k){
            return "NO"
        }
    }
    return "YES"
}
console.log(permutingTwoArrays(10 , [2, 1, 3], [7, 8, 9]));
console.log(permutingTwoArrays(5 , [1, 2, 2, 1], [3, 3, 3, 4]));