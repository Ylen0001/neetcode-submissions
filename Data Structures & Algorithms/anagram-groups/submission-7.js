class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapped = new Map();

        strs.forEach(str => {
            let count = new Array(26).fill(0);
            for(let i = 0; i < str.length; i++)
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            const key = count.join('#');

            if(!mapped.has(key))
                mapped.set(key, []);
            mapped.get(key).push(str);
        })
        return Array.from(mapped.values());
    }
}
