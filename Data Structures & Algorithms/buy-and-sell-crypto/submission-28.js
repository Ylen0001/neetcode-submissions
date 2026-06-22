class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProfit = 0;
        for(let r = 1; r < prices.length; r++){
            let profit = prices[r] - prices[l];
            if(prices[l] > prices[r])
                l = r;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
