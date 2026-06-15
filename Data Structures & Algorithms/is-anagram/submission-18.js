class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false;
        let dict = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++){
            dict[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            dict[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return dict.every(val => val === 0);
    }
}
