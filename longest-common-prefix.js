strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) {
    s="";
    prefix=strs[0]; //flower
        for(let i=0;i<prefix.length;i++){
            let char=prefix[i];
            kt=true;
            for(let j=1;j<strs.length;j++)
            {
                if(prefix[i]!=strs[j][i]){
                    kt=false;
                    break;
                }
            }
            if(kt){
                s+=char;
            }
            else{
                break;
            }
        }
        console.log(s);
    return s;
};
longestCommonPrefix(strs);