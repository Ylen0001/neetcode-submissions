class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapped = new Map();
        strs.forEach(str => {
            let dict = new Array(26).fill(0);
            for(let i = 0; i < str.length; i++)
                dict[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            let key = dict.join('#');
            if(!mapped.has(key))
                mapped.set(key, []);
            mapped.get(key).push(str);
        })
        return Array.from(mapped.values());
    }

}