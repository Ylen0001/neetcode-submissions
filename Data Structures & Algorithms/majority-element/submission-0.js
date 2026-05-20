class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidat = 0,
        vote_difference = 0;
        for(let num of nums)
        {
            if(vote_difference === 0)
                candidat = num;
            vote_difference += candidat === num ? 1 : -1;
        }
        return candidat;
    }
}

