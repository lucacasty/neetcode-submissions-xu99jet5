class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => b-a);

        let i = 0;
        let j = people.length-1;
        let boats = 0;

        while(i<=j) {
            if(people[i]+people[j] <= limit) {
                i++;
                j--;
                boats++;
            } else if(people[i] <= limit) {
                i++;
                boats++;
            }   else {
                j--;
                boats++;
            }
        }

        return boats;
    }
}
