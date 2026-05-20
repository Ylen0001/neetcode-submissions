class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapped = new Map();
        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(mapped.has(diff))
                return [mapped.get(diff), i];
            mapped.set(nums[i], i);
        }
        return [];
    }
}
