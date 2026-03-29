class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    /*
    EXAMPLES:
    "racecar", "carrace" => true
    "jar", "jam" => false

    SOLUTIONS:
    - brute force: 2 loops to check o(n*n)  TOO SLOW
    - one for loop and search for indexOf   PROBLEM: need to manage more than one charachter 
    */
    isAnagram(s, t) {
        let history = {};
        if(s.length < t.length) {
            let sTmp = s;
            s = t;
            t = sTmp;
        }
        //for loop to iterate the string
        for(let char of s) {
            //search For index, put start of index
            let index = t.indexOf(char,history[char] !== undefined ? (history[char]+1) : 0);
            if(index !== -1) {  //found
                //if found set in an object "s":2
                history[char] = index;
            } else {
                return false;
            }
        }
        return true;
    }
}
