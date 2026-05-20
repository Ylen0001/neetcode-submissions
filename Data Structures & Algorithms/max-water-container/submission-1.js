class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left < right){
            let area = (right - left) * Math.min(heights[right], heights[left]);
            if(heights[left] < heights[right])
                left++;
            else
                right--;
            max = Math.max(max, area);
        }
        return max;
    }
}


/* calcul de l'aire, et mouvement de window en fonction du plus petit entre left et right */