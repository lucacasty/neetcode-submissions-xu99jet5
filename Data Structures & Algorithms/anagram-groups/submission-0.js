class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //order str so i can check easily
        let strOrdered = [...strs];
        const map = new Map();
        for(let i=0;i<strOrdered.length;i++) {
            strOrdered[i] = strOrdered[i].split("").sort().join("");
            if(map.has(strOrdered[i])) {
                let arr = map.get(strOrdered[i]);
                arr.push(i);
                map.set(strOrdered[i],arr);
            } else {
                map.set(strOrdered[i],[i]);
            }
        }

        let result = [];
        for(let [key,value] of map) {
            let arr = [];
            for(let val of value) {
                arr.push(strs[val]);
            }
            result.push(arr);
        }
        return result;
    }
}
