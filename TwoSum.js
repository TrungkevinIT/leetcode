nums=[1,2,3,4,5]
target=5
var twoSum = function(nums, target) {
  for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            console.log('[ '+i+','+j +' ]')
            return ; 
        }
    }
  }  
};
twoSum(nums,target);