class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mapped = new Map();
        let l = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++)
        {
            if(mapped.has(s[r]) && mapped.get(s[r]) >= l) // = Si c'est un doublon
            {
                l = Math.max(l, mapped.get(s[r]) + 1);
            }
            mapped.set(s[r], r);

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}