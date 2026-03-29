class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lengths = strs.map(str => str.length);
        return `${JSON.stringify(lengths)}:${strs.join('')}`;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];

        const firstChunkEnd = str.indexOf(':'); // split only at the first : we know is safe not all occurences thereafter (can be in strings)
        const stringifiedLengths = str.substring(0, firstChunkEnd);
        const joinedEncodedString = str.substring(firstChunkEnd+1, str.length);
      
        let cursor = 0;
        const lengths = JSON.parse(stringifiedLengths);
        for(const length of lengths){
            decoded.push(joinedEncodedString.substring(cursor, cursor+length));
            cursor += length;
        }

        return decoded;
    }
}