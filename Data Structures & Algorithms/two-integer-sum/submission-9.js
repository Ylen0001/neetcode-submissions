class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ref = new Map();
        for(let i = 0; i < nums.length; i++)
        {
            let j = target - nums[i];
            if(ref.has(j))
                return [i, ref.get(j)]
            ref.set(nums[i], i);
        }
        return [];
    }
}
