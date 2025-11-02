haystack="sadbutsad"
needle = "sad"
var strStr = function(haystack, needle) {
    m=haystack.length
    n=needle.length
    for(let i=0;i<=m-n;i++){
        j=0
        while(j<n){
            if(haystack[i+j]!=needle[j]){
                break;
            }
            j++
        }
        if(j==n){
            return i;
        }
    }
    return -1;
};
console.log(strStr(haystack,needle))
strStr(haystack,needle)