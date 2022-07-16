/**
 * @param {number[]} nums
 * @return {boolean}
 */


// SOLUTION 1
// Space: O(n)
// var containsDuplicate = function(nums) {
//     let hashtable = {};
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] in hashtable)
//             return true;
//         hashtable[nums[i]] = 1;
//     }
//     return false
// };

 
//SOLUTION 2:  https://www.youtube.com/watch?v=umqL2CyEywM
var containsDuplicate = function(nums) {
    
    var numbers = new Set();

for(let num of nums) {
//     if the set doesnt already have the number
    if(!numbers.has(num)) {
        numbers.add(num);
    } else {
        return true;
    }
}
    return false;
};