/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Questions to ask: 1) can I use the same formula twice? 2) is there multiple soltions.

// BRUTE FORCE 
//Time Complexity: O(n^2)
//Leetcode - Two sum solution explained in Javascript & Java | Coding interview question

// function twoSum (nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target);
//                     return [i, j]

//         }

//     }
//     throw new Error ("no solution");
// }


// Leetcode Two Sum Solution | Coding Interview Question


function twoSum(nums, target) {
    
    //declaring the variables
    const comp = new Map();
    const len = nums.length;
    
    //iterating through the array
    for (let i = 0; i < len; i++) {
        if(comp[nums[i]] >= 0){
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }
    return [];
}

