class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)
            return false;
        const alph = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++)
        {
            alph[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            alph[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return alph.every((val) => val === 0);
    }
}
