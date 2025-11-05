//số bật thang
n=3
var climbStairs = function(n) {
    if(n==1) return 1;
    if(n==2) return 2;
    twostep=1 //(n-2) nếu bước là 1
    onestep=2 //(n-1) nếu bước là 2
    tong=0
    for(let i=3;i<=n;i++){
        tong=onestep+twostep;
        twostep=onestep //(n-2) vd (4-2) = 2
        onestep=tong //(n-1) vd (4-1) = 3
    }
    return tong;
};
console.log(climbStairs(n))
climbStairs(n)