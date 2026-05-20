class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s){
        let cleaned = s.replaceAll(" ", '').toLowerCase();
        cleaned = cleaned.replace(/[^a-zA-Z0-9]/g, '');
        let len = 0;
        if(cleaned.length % 2 === 1)
            len = (cleaned.length / 2) + 0.5;
        else if(cleaned.length % 2 === 0)
            len = cleaned.length / 2;
        // console.log(cleaned, len);
        let full_len = cleaned.length - 1;
        for(let i = 0; i < len; i++)
        {
            if(cleaned[i] !== cleaned[full_len - i])
                return false;
        }
        return true;
    } 
}
