class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let right = cleaned.length - 1;
        let left = 0;
        while(left <= right){
            if(cleaned[left] !== cleaned[right])
                return false;
            left++;
            right--;
        }
        return true;
    }
}
