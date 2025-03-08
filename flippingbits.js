function flippingbits(n){
    return (~n >>> 0)
}

console.log(flippingbits(2147483647));
console.log(flippingbits(1));
console.log(flippingbits(0));