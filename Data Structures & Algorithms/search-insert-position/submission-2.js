class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        while(left <= right){
            mid = Math.floor((left + right) / 2);
            if(target === nums[mid])
                return mid;
            else if(nums[mid] < target)
                left = mid + 1;
            else if(nums[mid] > target)
                right = mid - 1;
        }
        return left;
    }
}

/* Petit twist ici. On fait comme Binary Search, sauf que si la valeur n'existe pas
on return l'index auquel il aurait dû se trouver si il y avait été*/