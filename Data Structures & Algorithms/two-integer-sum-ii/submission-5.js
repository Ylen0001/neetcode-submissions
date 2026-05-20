class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while(left < right){
            let sum = numbers[left] + numbers[right];
            if(sum === target)
                return [left + 1, right + 1];
            else if(sum > target)
                right--;
            else
                left++;

        }
    }
}



/* Return les deux chiffres de numbers qui additionnées donnent target.
On utilise Two Pointers. Si on utilisait une map on ne respecterait pas le O(1) space complexity 

*/ 