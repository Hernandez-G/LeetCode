/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashtable = {};
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] in hashtable)
            return true;
        hashtable[nums[i]] = 1;
    }
    return false
};