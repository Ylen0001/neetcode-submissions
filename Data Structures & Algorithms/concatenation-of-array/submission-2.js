class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;
        const res = new Array(nums.length * 2);
        for(let i = 0; i < len; i++)
        {
            res[i] = res[i + len] = nums[i];
        }
        return res;
    }
}
