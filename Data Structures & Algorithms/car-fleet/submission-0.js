class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    /*
    Solution:

    Brute force:
        cycle like every hour until all cars have reached the target
        every car that reach the target togheter count++
        do not count cars that have already reached the end, maybe use a set to store cars that have finished or like a null if they have finished

    Map Optimization 
        cycle all elements
        count how many hours they take
        map them
        return map keys length

    I could use a set it could be faster and more clean to check? 
    I just need to return how many fleet i don't need to group cars
    */

    carFleet(target, position, speed) {
        
        const setOfFleet = new Set();
        
        //cycle all elements
        for(let i=0;i<position.length;i++) {
            //case if cars already after target
            if(position[i] > target) {
                setOfFleet.add(0);
            } else {
                //using ceil to get next round
                setOfFleet.add(Math.ceil((target-position[i])/speed[i]));
            }
        }
        return setOfFleet.size;
    }
}
