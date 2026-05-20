class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let area = 0;
        let maxArea = 0;

        while(l < r){
            area = (r - l) * Math.min(heights[r], heights[l]);
            maxArea = Math.max(area, maxArea);

            if(heights[l] < heights[r])
                l++;
            else
                r--;
        }
        return maxArea;
    }
}



/* hauteur * largeur  1-indexed */