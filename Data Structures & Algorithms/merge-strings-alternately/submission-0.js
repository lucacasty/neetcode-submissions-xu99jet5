class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    mergeAlternately(word1, word2) {
        let finalWord = "";
        //create 2 pointers
        let i=0,j=0;

        //while pointer1<length and pointer2<length
        while(i<word1.length && j<word2.length) {
            //if not at limit add a caracter and pointer1++ e pointer2++
            finalWord += word1[i];
            finalWord += word2[j];
            i++;
            j++;
        }


        //at the and adding last string remained
        if(i<word1.length) {
            finalWord += word1.slice(i);
        } else if(j<word2.length) {
            finalWord += word2.slice(j);
        }

        return finalWord;
    }
}
