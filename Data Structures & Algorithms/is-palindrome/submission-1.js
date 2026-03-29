class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
        let i = 0;
        let j = s.length-1;
        while(i<j && s[i] == s[j]) {
            i++;
            j--
        }
        return (s[i] == s[j]);
    }
}
