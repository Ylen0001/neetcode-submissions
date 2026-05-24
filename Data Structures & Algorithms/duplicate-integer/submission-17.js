class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = new Set(nums);
        return nums.length !== res.size;
    }
}
