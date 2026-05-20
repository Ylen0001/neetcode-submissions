class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        while(left <= right){
            // Identifier la moitié triée
            mid = Math.floor((left + right) / 2);
            if(nums[mid] === target)
                return mid;
            else if(nums[mid] >= nums[left]){
                if(target >= nums[left] && target < nums[mid])
                    right = mid - 1;
                else
                    left = mid + 1;
            } else if(nums[right] >= nums[mid]){
                if(target > nums[mid] && target <= nums[right])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
        }
        return -1;
    }
}
