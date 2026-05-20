class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let l = 0;
        let maxFreq = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++){
            count[s[r]] = (count[s[r]] | 0) + 1;
            maxFreq = Math.max(count[s[r]], maxFreq);
            if((r - l + 1) - maxFreq > k){
                count[s[l]]--;
                l++;
            }
            res = Math.max(r - l + 1, res);
        }
        return res;
    }
}
