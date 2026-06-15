class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let maxProfit = 0;
        let l = 0;
        for(let r = 1; r < prices.length; r++){
            profit = prices[r] - prices[l];
            if(prices[r] < prices[l]){
                l = r;
            }
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit > 0 ? maxProfit : 0;
    }
}
