class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        const lemonadePrice = 5;
        const rest = new Map();
        rest.set(5,0);
        rest.set(10,0);
        rest.set(20,0);

        for(let i=0;i<bills.length;i++) {
            switch(bills[i]) {
                case 10:
                    if(rest.get(5)>0) {
                        rest.set(5,rest.get(5)-1);
                    } else {
                        return false;
                    }
                    break;
                case 20:
                    if(rest.get(5)>0) {
                        rest.set(5,rest.get(5)-1);
                    } else {
                        return false;
                    }
                    if(rest.get(10)>0) {
                        rest.set(10,rest.get(10)-1);
                    } else {
                        if(rest.get(5)>1) {
                            rest.set(5,rest.get(5)-2);
                        } else {
                            return false;
                        }
                    }
                    break;
            }
            rest.set(bills[i],rest.get(bills[i])+1);
        }

        return true;
    }
}
