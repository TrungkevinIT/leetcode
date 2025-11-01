nums=[3,2,2,3]
val=3
var removeElement = function(nums,val) {
    k=0
    for(let i=0;i < nums.length ; i++ ){
        if(nums[i] != val){
            nums[k] = nums[i]
            k++;
        }
    }
    console.log(nums)
    console.log(k)
    return k
};
removeElement(nums,val);
