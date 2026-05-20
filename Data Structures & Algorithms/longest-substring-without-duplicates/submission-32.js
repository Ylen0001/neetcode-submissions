class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const a = new Set();
        let l = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++){
            while(a.has(s[r]))
            {
                a.delete(s[l]);
                l++;
            }
            if(!a.has(s[r]))
                a.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}


/* Objectif vérifier la longest string sans characters qui se répète.
On va utiliser un set, et une sliding window. Donc l'idée c'est de comparer la taille du set
à r - l + 1. Dés que la len n'est plus la même après un ajout dans le set, */