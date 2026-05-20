class Solution{
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    twoSum(nums, target) {
        const prevMap = new Map;
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

// O(n) / O(n)
/* L'intérêt de l'exercice est de choisir la bonne structure de données pour le réaliser avec le meilleur algo 
La map est la meilleure pour ça :
map.has(x) / map.get(x) / map.set(nums[x], x) sont des fonctions idéales pour chercher si le complément existe.
Le complément : La logique est simple, on soustrait chaque valeur de nums à target, et on check si on 
a un complément qui existe déjà dans notre map. Sinon on ajoute nums[i] à notre map. Si on a un match, on renvoie l'index et la valeur. */

