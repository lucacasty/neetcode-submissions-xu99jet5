class Solution {
    /**
     * @param {number[]} dist
     * @param {number[]} speed
     * @return {number}
     */
    eliminateMaximum(dist, speed) {
        let arrMins = [];
        for(let i=0;i<dist.length;i++) {
            let currentMin = Math.ceil(dist[i]/speed[i]);
            arrMins.push(currentMin);
        }

        arrMins.sort((a,b) => a-b)

        console.log(arrMins);

        let mins = 0;
        for(let i=0;i<arrMins.length;i++) {
            if(mins < arrMins[i]){
                mins++;
            } else {
                break;
            }
        }

        return mins == 0 ? 1 : mins;
    }
}
