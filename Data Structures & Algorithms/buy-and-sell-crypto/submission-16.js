class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let maxProfit = 0;
        let profit = 0;
        for(let right = 1; right < prices.length; right++){
            if(prices[right] > prices[left]){
                profit = prices[right] - prices[left];
            } else
                left = right;

            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
