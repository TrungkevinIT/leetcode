    s=")"
    var isValid = function(s) {
        stack=[]
        if(s[0]==')'||s[0]==']'||s[0]=='}'){
            console.log("false");
            return false;
        }
        for(let i=0;i<s.length;i++){
            if(s[i]=='('||s[i]=='['||s[i]=='{'){
                stack.push(s[i])
            }else if((s[i]==')' && stack[stack.length-1]!='(')||s[i]==']' && stack[stack.length-1]!='['||s[i]=='}' && stack[stack.length-1]!='{')
            {
                stack.push(s[i])
            }
            else{

                stack.pop()
            }
            console.log(stack);
        }
        if(stack.length==0){
            console.log("true");
            return true
        }else{
            console.log("false");
            return false
        }
    };
    isValid(s);