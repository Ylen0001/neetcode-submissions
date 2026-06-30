class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;
        while(l < r){
            area = Math.min(heights[l], heights[r]) * (r - l);
            if(heights[l] < heights[r])
                l++;
            else
                r--;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
