nums=[0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    k=1
    for(let i=1;i < nums.length ; i++ ){
        if(nums[i] != nums[k-1]){
            nums[k] = nums[i]
            k++;
        }
    }
    console.log(nums)
    console.log(k)
    return k
};
removeDuplicates(nums);