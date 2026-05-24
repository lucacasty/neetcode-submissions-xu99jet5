class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let astros = [];
        let x =0;
        while(asteroids.length) {
            astros = [];
            for(let i=0;i<asteroids.length;i++) {
                if(asteroids[i] > 0 && asteroids[i+1] < 0) {
                    if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])) {
                        astros.push(asteroids[i]);
                    } else if(Math.abs(asteroids[i+1]) > Math.abs(asteroids[i])) {
                        astros.push(asteroids[i+1]);
                    }
                    i++;
                } else {
                    astros.push(asteroids[i]);
                }
            }
            console.log(asteroids);
            console.log(astros);
            if(asteroids.length == astros.length) {
                return asteroids;
            }
            asteroids = [...astros];
            x++;
        }
 
        return 0;
    }
}
