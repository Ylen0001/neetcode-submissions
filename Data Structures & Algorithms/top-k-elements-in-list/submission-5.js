class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapped = new Map();
        for(let i = 0; i < nums.length; i++)
        {
            if(mapped.has(nums[i]))
                mapped.set(nums[i], mapped.get(nums[i]) + 1);
            else
                mapped.set(nums[i], 1);
        }
        const result = Array.from(mapped.entries()).sort((a, b) => b[1] - a[1]);
        return result.splice(0, k).map(pair => pair[0]);
    }
}



/*  But de l'exercice, on veut une map key/value chiffre/occurrences 
Si on a déjà vu le chiffre, on ajoute un à la valeur
Sinon on l'insère dans la map à 1. 

Donc à ce stade on a une map avec des pairs. */