class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapped = new Map();
        
        for(let i = 0; i < nums.length; i++){
            mapped.set(nums[i], (mapped.get(nums[i]) | 0) + 1);
        }
        let res = Array.from(mapped.entries()).sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map(val => val[0]);
    }
}
