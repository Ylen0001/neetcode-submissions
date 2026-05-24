class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right){
            area = Math.min(heights[left], heights[right]) * (right - left);
            if(heights[right] >= heights[left]){
                left++;
            } else
                right--;
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
    }
}
