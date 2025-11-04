x=8
var mySqrt = function(x) {
    l=0;
    r=x;
    s=0
    if(x==0 || x < 2) return x;
    while(l<=r){
        mid=Math.floor(l+(r-l)/2);
        if(mid <= x/mid){
            s=mid 
             l=mid+1    
        }else{
            r=mid-1
        }
    }
    return s;
    // return Math.floor(Math.sqrt(x))
};
console.log(mySqrt(x))
mySqrt(x)