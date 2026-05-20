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
Ensuite, on transforme avec join '#' en clef. 
Si jamais la clef n'est pas présente dans la resMap, on crée un tableau vide
Si jamais la clef existe déjà on get la clef dans resMap et on push dedans le mot qui correspond
à la fin, on renvoie un tableau de tableau avec Array.from(). */