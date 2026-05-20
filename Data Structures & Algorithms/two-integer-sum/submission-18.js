class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target){
        const mapped = new Map();
        for(let i = 0; i < nums.length; i++)
        {
            const diff = target - nums[i];
            if(mapped.has(diff))
                return [mapped.get(diff), i]
            mapped.set(nums[i], i);
        }
        return []
    }
}


/* Formuler le problème : 
Dans un tableau de chiffre et un nombre target donnée, renvoyer les deux indices du tableaux dont
les valeurs une fois additionnée donnent un résultat égal à target 

Méthode : Hash map 
Pourquoi : Checker et pouvoir accéder facilement */