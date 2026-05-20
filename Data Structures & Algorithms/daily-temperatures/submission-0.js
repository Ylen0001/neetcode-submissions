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


/* Renvoyer pour chaque index la distance qui sépare sa valeur 
d'une valeur qui lui est supérieure et qui la succède. Le tout sous la forme d'un array */