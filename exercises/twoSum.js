/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists. */

// Method 1 Brute Force

const twoSum = (nums, target) => {
    // first we create an array to hold the value of the indeces that match our criteria.
    const indeces = [];
    // Iterate through the array to check against the first number.
    for (let i = 0; i < nums.length; i++) {
        // Iterate through the array again for the second number. Keeping in mind we only want to use each value once we start the variable at i + 1 so so it starts iterating through the array after the first number.
        for (let j = i + 1; j < nums.length; j++) {
            // if we get a match for the total given as our target than we want to add each index to the array we created.
            if (nums[i] + nums[j] === target) {
                indeces.push(i);
                indeces.push(j);
            }
        }
    }
    // Don't forget we need to return the values we added to our array as the result of the function.
    return console.log(indeces);
};

// export for testing above function/s in the dom
export const twoSumSolution = () => {
    twoSum([2, 7, 11, 15], 13);
};
