class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const ret = new Array(len * 2);
        for(let i = 0; i < len; i++)
        {
            ret[i] = ret[i + len] = nums[i];
        }
        return ret;
    }
}
