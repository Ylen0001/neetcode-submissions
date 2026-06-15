class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        cleaned.replace(' ', "");
        let l = 0;
        let r = cleaned.length - 1;
        while(l <= r){
            if(cleaned[l] !== cleaned[r])
                return false
            r--;
            l++;
        }
        return true;
    }
}
