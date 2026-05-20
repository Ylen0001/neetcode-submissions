class Solution{
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]} */
    
    topKFrequent(nums, k){
        const res = new Map();
        for(let i = 0; i < nums.length; i++)
        {
            if(res.has(nums[i]))
                res.set(nums[i], res.get(nums[i]) + 1);
            else
                res.set(nums[i], 1);
            console.log([...res]);
        }
        const result = Array.from(res.entries()).sort((a, b) => b[1] - a[1]);
        return result.slice(0, k).map(pair => pair[0]);
    }
}


