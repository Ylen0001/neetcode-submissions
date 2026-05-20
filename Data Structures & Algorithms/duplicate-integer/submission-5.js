class Solution {
    /** 
     * @param {number[]} nums
     * @return {boolean} 
     */

    hasDuplicate(nums)
    {
        const res = new Array;
        for(let i = 0; i < nums.length; i++)
        {
            if(res[nums[i]] === 1)
                return true;
            res[nums[i]] = 1;
        }
        return false;
    }
}
