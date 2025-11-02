nums=[1,3,5,6]
target=3
var searchInsert = function(nums, target) {
    l=0
    r=nums.length-1
    while(l<=r){
        mid=Math.floor(l+(r-l)/2)
        if(nums[mid]==target){
            return mid
        }else if(nums[mid] <target){
            l=mid+1
        }else{
            r=mid-1
        }
    }
    return l
};
console.log(searchInsert(nums,target))
searchInsert(nums,target)