class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let res = new Set(nums);
        return res.size !== nums.length ? true : false;
    }
}
