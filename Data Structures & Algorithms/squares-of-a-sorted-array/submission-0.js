class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        const res = [];
        let left = 0;
        let right = nums.lenght - 1;
        for(let i = 0; i < nums.length; i++){
            res[i] = nums[i] * nums[i];
        }
        return res.sort((a, b) => a - b);
    }
}



/* Pas un BST, pas une sliding Window. Peut-être une stack ou un two pointers.
Pas de set parce que ça n'autorise pas les doublons. Une map ? 
Pour stocker le carré et le nombre d'occurence? Non, parce qu'avec les doublons ça merderait.  */