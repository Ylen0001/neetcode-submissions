class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapped = new Map();
        let i = 0;
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(mapped.has(diff)){
                return [mapped.get(diff), i];
            }
            mapped.set(nums[i], i);
        }
        return [];
    }
}
