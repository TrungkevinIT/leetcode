digits=[4,3,2,9]
var plusOne = function(digits) {
    n=digits.length
    k=0
    for(let i=n-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++
            return digits
        }else{
            digits[i]=0
            k++
        }
    }
    if(n==k){
        digits.unshift(1)
    }
    return digits
};
console.log(plusOne(digits))
plusOne(digits)