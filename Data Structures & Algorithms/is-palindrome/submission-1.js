class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let t = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase(),
        len = 0, full_len = t.length - 1;
        if(t.length % 2 === 0)
            len = t.length / 2;
        else
            len = (t.length / 2) + 0.5;
        
        for(let i = 0; i < len; i++)
        {
            // console.log(t[full_len]);
            if(t[i] !== t[full_len - i])
                return false
        }
        return true;

    }
}




/* Step one : Clean regex + lowercase la string
Step two : Enlever les espaces
Last step : Comparer i et i - len */