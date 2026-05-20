class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let profit = 0;
        let maxProfit = 0;
        for(let r = 0; r < prices.length; r++){
            if(prices[r] > prices[l]){
                profit = prices[r] - prices[l];
            } else
                l = r;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
