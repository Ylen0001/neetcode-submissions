class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate = [];
        for(let i = 0; i < nums.length; ++i)
        {
            if(duplicate[nums[i]] === 1)
                return (true);
            duplicate[nums[i]] = 1;
        }
        return false;
    }
}
