a="11"
b="1"
var addBinary = function(a, b) {
    i=a.length-1;
    j=b.length-1;
    s="";
    carry=0
    while(i>=0 || j>=0 || carry >0){
        let sum = carry
        if(i>=0){
            sum+=(a[i]==='1'? 1 : 0 )
            i--;
        }
        if(j>=0){
            sum+=(b[j]=== '1' ? 1 : 0)
            j--
        }
        let bitkq=sum%2;
        carry=Math.floor(sum/2)
        s=bitkq+s;
    }
    return s
};
console.log(addBinary(a,b));
addBinary(a,b)
