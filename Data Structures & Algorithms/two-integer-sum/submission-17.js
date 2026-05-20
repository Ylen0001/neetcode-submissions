class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let prevMap = new Map();
        for(let i = 0; i < nums.length; i++)
        {
            let diff = target - nums[i];
            if(prevMap.has(diff))
                return [prevMap.get(diff), i];
            prevMap.set(nums[i], i);
        }
        return [];
    }


}


/* Formuler le problème : 
Dans un tableau de chiffre et un nombre target donnée, renvoyer les deux indices du tableaux dont
les valeurs une fois additionnée donnent un résultat égal à target 

Méthode : Hash map 
Pourquoi : Checker et pouvoir accéder facilement */