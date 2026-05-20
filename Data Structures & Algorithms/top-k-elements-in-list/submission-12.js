class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapped = new Map();
        for(let i = 0; i < nums.length; i++){
            if(mapped.has(nums[i]))
                mapped.set(nums[i], mapped.get(nums[i]) + 1);
            else
                mapped.set(nums[i], 1);
        }
        let res = Array.from(mapped.entries()).sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map(val => val[0]);

}
}

/* Sliding window fixe (taille k) 
On prend une map. chaque fois qu'on croise un chiffre, on lui ajouter un*/