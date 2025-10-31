s="MCMXCIV"
var romanToInt = function(s) {
    map={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    tong=map[s[s.length-1]];
    for(let i=s.length-2;i>=0;i--){
        currenValue=map[s[i]];
        right=map[s[i+1]];
        
        if(right>currenValue){
            if(currenValue==1||currenValue==10||currenValue==100){
                tong-=currenValue;
            }
        }
        else{
            tong+=currenValue
        }
        console.log(tong);
    }
};
romanToInt(s);