class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s,i=0,j=null,firstTime = true) {
        if(j==null) {
            j = s.length-1;
        }

        while(i < j) {
            if(s[i] == s[j]) {
                i++;
                j--;
            } else {
                if(firstTime) {
                    return this.validPalindrome(s,i+1,j,false) || this.validPalindrome(s,i,j-1,false);
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
