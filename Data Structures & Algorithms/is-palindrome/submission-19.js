class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replaceAll(' ', "" ).toLowerCase();
        cleaned = cleaned.replace(/[^a-zA-Z0-9]/g, '');
        console.log(cleaned);
        let l = 0;
        let r = cleaned.length - 1;
        while(l <= r){
            if(cleaned[l] !== cleaned[r])
                return false;
            l++;
            r--;
        }
        return true;
    }
}
