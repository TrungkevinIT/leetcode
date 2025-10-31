x=121
var isPalindrome = function(x) { 
    tong=0;
    num=x;
    if(num<0)
        {
            console.log("false");
             return false;
        }
    if(num==0){
        console.log("true");
        return true;
    } 
    while(num!=0){
        temp=num%10;
        tong=tong*10+temp;
        num=Math.floor(num/10);
    }
    if(tong==x){
        console.log("true");
        return true;
    }else
    {
        console.log("false");
        return false
    }
};
isPalindrome(x);