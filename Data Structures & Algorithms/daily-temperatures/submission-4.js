class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i=0;i<temperatures.length-1;i++) {
            stack.push(i);
            while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i+1]) {
                let el = stack.pop();
                result[el] = i-el+1;
            }
        }

        return result;
    }
}
