class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let res = nums.length;
        let sum = 0
        let trigger = false;
        for(let r = 0; r < nums.length; r++){
            
            sum += nums[r];
            
            while(sum >= target){
                res = Math.min(res, r - l + 1);
                sum -= nums[l];
                l++;
                trigger = true;
            }
        }
        if(!trigger)
            return 0;
        return res;
    }
}


/* sliding window dynamique. 
Pourquoi? Parce que ce qui nous intéresse c'est la somme des valeurs présentes dans une fenêtre
dont la taille est déterminée par cette somme > target 
Attention, on ne return pas la somme, mais la longueur minimum d'un subarray qui remplit
la condition somme > target. */
