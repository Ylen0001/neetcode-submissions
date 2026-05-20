class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];
        let oldIndex = 0;
        for(let r = 0; r < temperatures.length; r++){
            while(stack.length !== 0 && temperatures[r] > temperatures[stack[stack.length - 1]]){
                oldIndex = stack.pop();
                res[oldIndex] = r - oldIndex;
            }
            stack.push(r)
        }
        return res;
    }
}
