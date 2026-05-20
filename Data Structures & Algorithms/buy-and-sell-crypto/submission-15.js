class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        for(let r = 1; r < prices.length; r++){
            let profit = 0;
            if(prices[r] < prices[left])
                left = r;
            else
                profit = prices[r] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
