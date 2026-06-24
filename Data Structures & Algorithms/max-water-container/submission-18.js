class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;
        while(l < r){
            let area = Math.min(heights[l], heights[r]) * (r - l);
            if(heights[r] > heights[l]){
                l++;
            } else
                r--;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}




// Le brut force : Double boucle while
// Pattern : sliding window dynamique | Condition : heights[L] > heights[R]
// Variables : maxArea 