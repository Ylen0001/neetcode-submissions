class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums2 = []
        for(let i = 0; i < nums.length; i++)
        {
            if(nums2[nums[i]] == nums[i])
                return true
            else
                nums2[nums[i]] = nums[i]
        }
        return false
    }
}
