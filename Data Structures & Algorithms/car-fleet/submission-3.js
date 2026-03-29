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
        // crea array di coppie [pos, speed]
        let cars = position.map((pos, i) => [pos, speed[i]]);

        // ordina per posizione decrescente (vicino al target prima)
        cars.sort((a, b) => b[0] - a[0]);

        let currentFleetTime = null;
        let count = 0;

        for(let i=0;i<cars.length;i++) {
            let rounds = (target-cars[i][0])/cars[i][1]; 
            if(currentFleetTime == null || rounds > currentFleetTime) {
                currentFleetTime = rounds;
                count ++;
            }
        } 

        return count;
    }
}
