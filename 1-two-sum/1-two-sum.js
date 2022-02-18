/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0 ; i < nums.length; i++){
        for (var j = i+1; j < nums.length; j++){
         var sum = nums[i] + nums[j];
        if(sum === target){
            return [i,j];   
        }
        }
    }
};

