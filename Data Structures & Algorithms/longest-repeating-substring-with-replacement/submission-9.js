class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let dict = new Array(26).fill(0);
        let left = 0;
        let res = 0;
        for(let right = 0; right < s.length; right++){
            dict[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
            let count = Math.max(...dict);
            if((right - left + 1) - count > k){
                dict[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
                left++;
            } else
                res = Math.max(res, right - left + 1);
        }
        return res;
        
    }
}
