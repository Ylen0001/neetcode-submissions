class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let mid = 0;
        let res = 0;
        while(left <= right){
            let hours = 0;
            mid = Math.floor((left + right) / 2);
            for(const pile of piles){
                hours += Math.ceil(pile / mid);
            }
            if(hours <= h){
                res = mid;
                right = mid - 1;
            } else
                left = mid + 1;
        }
        return res;
    }
}
