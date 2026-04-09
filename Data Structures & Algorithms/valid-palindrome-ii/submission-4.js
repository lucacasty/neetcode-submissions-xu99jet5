class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s,i=0,j=null) {
        let change = false;
        if(j==null) {
            j = s.length-1;
        }

        while(i < j) {
            if(s[i] == s[j]) {
                i++;
                j--;
            } else {
                if(change)  return false;

                change = true;
                if(i!==j-1 && s[i] == s[j-1] && i+1 !== j && s[i+1] == s[j]) {
                    return this.validPalindrome(s,i+1,j) || this.validPalindrome(s,i,j-1);
                }else if(s[i] == s[j-1]) {
                    j--;
                } else if(s[i+1] == s[j]) {
                    i++;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
