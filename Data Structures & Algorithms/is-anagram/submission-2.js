class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)
            return false;
        let alpha = new Array(26).fill(0)
        for(const c of s)
        {
            alpha[c.charCodeAt(0) -  'a'.charCodeAt(0)]++; // On augmente la valeur pour chaque fois qu'on a croisé la lettre
        }
        console.log(alpha);
        for(const c of t)
        {
            if(alpha[c.charCodeAt(0) - 'a'.charCodeAt(0)] === 0)
                return false;
            alpha[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        console.log(alpha);
        for(const c of alpha)
        {
            if(alpha[c] !== 0)
                return false;
        }
        return true;
    }
}
