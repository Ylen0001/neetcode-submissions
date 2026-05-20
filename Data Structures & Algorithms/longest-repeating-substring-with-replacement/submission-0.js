class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let left = 0;
        let res = 0;
        let maxFreq = 0;

        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, count[s[right]]);

            while ((right - left + 1) - maxFreq > k) {
                count[s[left]]--;
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}


/* Identifier la substring la plus longue constitué de character qui ne sont pas les mêmes. 

Map + sliding window fixe de len K. */