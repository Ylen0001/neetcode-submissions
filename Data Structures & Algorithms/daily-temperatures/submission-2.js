class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        let oldIndex = 0;
        for(let i = 0; i < temperatures.length; i++){
            
            while(stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                oldIndex = stack.pop();
                res[oldIndex] = i - oldIndex;
            }
            stack.push(i);
        }
        return res;
    }
}
