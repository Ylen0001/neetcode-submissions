class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resMap = new Map();
        // console.log(dict);
        strs.forEach(str => {
            const dict = new Array(26).fill(0);
            // let map = new Map();
            for(let i = 0; i < str.length; i++)
                dict[str.charCodeAt(i) - 'a'.charCodeAt(0)]++; 
            const key = dict.join(`#`);
    

            if(!resMap.has(key))
                resMap.set(key, []);
            
            resMap.get(key).push(str);

            // console.log(resMap);
        })
        const result = Array.from(resMap.values());
        return result;
    }
}
/* Pour chaque mot on fait un dictionnaire de l'ascii
Ensuite, on transforme avec join '#' en clef. On ajoute la clef à resMap */