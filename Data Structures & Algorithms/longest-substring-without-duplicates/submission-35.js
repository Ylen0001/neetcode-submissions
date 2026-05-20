class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mapped = new Map();
        let left = 0;
        let res = 0;
        for(let right = 0; right < s.length; right++){
            if(mapped.has(s[right]) && mapped.get(s[right]) >= left){
                left = Math.max(left, mapped.get(s[right]) + 1)
            }
            mapped.set(s[right], right);
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}



/* Sliding window dynamique

Pour que L bouge, il faut que s[r] corresponde à une lettre qui existe déjà, et s'assurer que
L ne reparte pas en arrière. */