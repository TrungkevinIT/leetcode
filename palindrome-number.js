num=123
tong=0
var isPalindrome = function(x) {
    while(num!=0)
   {
     tam =num%10;
    tong=tam+tong*10;
    num=Math.floor(num/10);
   }
   console.log(tong);
    if(tong==x){
        return true;
    }
    else{
        return false;
    }
};
isPalindrome(num);