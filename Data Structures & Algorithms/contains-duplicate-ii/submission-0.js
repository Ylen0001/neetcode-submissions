class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const mapped = new Map();
        for(let r = 0; r < nums.length; r++){
            if(mapped.has(nums[r]) && r - mapped.get(nums[r]) <= k)
                return true;
            mapped.set(nums[r], r);
        }
        return false;
    }
}



/* Décryptage : 

Return true si : Deux chiffre de l'array sont identiques ET la distance abs entre les deux est
<= à K*/