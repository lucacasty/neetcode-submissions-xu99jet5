class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const S1LENGTH = s1.length;
        const S2LENGTH = s2.length;
        const S3LENGTH = s3.length;

        if(S1LENGTH-S2LENGTH > 1 || S2LENGTH-S1LENGTH > 1 || S1LENGTH+S2LENGTH !== S3LENGTH)  return false;

        const midStr1 = Math.round(S1LENGTH/2);

        const check = s1.slice(0,midStr1)+s2+s1.slice(midStr1);

        console.log(check);

        return (check == s3);
    }
}
