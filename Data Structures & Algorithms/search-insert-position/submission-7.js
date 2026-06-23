class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let mid = 0;
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            mid = Math.floor((left + right) / 2); 
            if(nums[mid] === target)
                return mid;
            else if(nums[mid] > target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return left;
    }
}
