/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var finalArr = [...new Set(nums.sort((a,b)=>a-b))]   

	 
    if(finalArr.length < 3) return finalArr[finalArr.length-1]

	
    else return finalArr[finalArr.length -3]    

};