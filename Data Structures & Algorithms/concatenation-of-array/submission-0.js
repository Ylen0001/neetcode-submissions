class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let size = nums.length;
        const nums2 = new Array()
        for(let i = 0; i < size; i++)
        {
            nums2.push(nums[i]);
        }
        for(let i = 0; i < size; i++)
        {
            nums2.push(nums[i]);
        }
        console.log(nums2);
        return nums2;
    }
}
