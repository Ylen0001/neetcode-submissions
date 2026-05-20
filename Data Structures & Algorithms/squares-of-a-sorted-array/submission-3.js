class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        const res = [];
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            if(nums[left] * nums[left] >= nums[right] * nums[right]){
                res.push(nums[left] * nums[left]);
                left++;
            }
            else{
                res.push(nums[right] * nums[right]);
                right--;
            }
        }
        return res.reverse();
    }
}



/* Pas un BST, pas une sliding Window. Peut-être une stack ou un two pointers.
Pas de set parce que ça n'autorise pas les doublons. Une map ? 
Pour stocker le carré et le nombre d'occurence? Non, parce qu'avec les doublons ça merderait.  */