class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = nums.length;
        let l = 0;
        let len = 0;
        let sum = 0;
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
