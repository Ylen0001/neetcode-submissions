class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let cost = 0;
        let max = 0;
        for(let right = 1; right < prices.length; right++){
            if(prices[left] < prices[right]){
                cost = prices[right] - prices[left];
            }else
                left = right;
            max = Math.max(max, cost);
        }
        return max;
    }
}


/* valeur minimal pour acheter, valeur maximal de l'array pour vendre.
Pas le droit de reculer, uniquement d'avancer
Si la valeur minimum de l'array est à la fin --> return 0.*/