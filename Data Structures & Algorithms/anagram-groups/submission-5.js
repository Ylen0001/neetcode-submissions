class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();

        strs.forEach(str => {
        let dict = new Array(26).fill(0);
            
            for(let i = 0; i < str.length; i++)
                dict[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            
            const key = dict.join('#');
            if(!res.has(key))
                res.set(key, []);
            res.get(key).push(str); 
        })
        return Array.from(res.values());
    }
}


/* Map key + [] 
On veut return un tableau de tableau */