class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mapped = new Map();
        for(let i = 0; i < nums.length; i++){
            mapped.set(nums[i], (mapped.get(nums[i]) + 1) || 1);
        }
        console.log("mapped =", mapped);
        let res = Array.from(mapped.entries()).sort((a, b) => b[1] - a[1]);
        console.log("res = ", res);
        return res.map((a) => a[0]).slice(0, k);
    }
}