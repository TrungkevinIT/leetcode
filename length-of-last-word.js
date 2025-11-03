s="   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    k=0
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!=" "){
            k++
        }
        if(k>0 && s[i]==" "){
            break;
        }
    }
    console.log(k)
    return k
    // word=s.trim().split(" ")
    // lastword=word[word.length-1]
    // console.log()
    // return lastword.length
};
lengthOfLastWord(s)