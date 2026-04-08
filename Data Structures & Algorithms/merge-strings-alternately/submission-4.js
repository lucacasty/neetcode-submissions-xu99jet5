class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    mergeAlternately(word1, word2) {
        let finalWord = "";
        //create 2 pointers
        let i=0;

        //while pointer1<length and pointer2<length
        while(i<word1.length && i<word2.length) {
            //if not at limit add a caracter and pointer1++ e pointer2++
            finalWord += word1[i];
            finalWord += word2[i];
            i++;
        }
        
        //at the and adding last string remained
        finalWord += word1.slice(i);
        finalWord += word2.slice(i);

        return finalWord;
    }
}
