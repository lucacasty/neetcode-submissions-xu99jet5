class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let five = 0;
        let ten = 0;

        for(let i=0;i<bills.length;i++) {
            switch(bills[i]) {
                case 5:
                    five++;
                    break;
                case 10:
                    if(five>0) {
                        five-=1;
                    } else {
                        return false;
                    }
                    ten++;
                    break;
                case 20:
                    if(five>0) {
                        five-=1;
                    } else {
                        return false;
                    }
                    if(ten>0) {
                        ten-=1;
                    } else {
                        if(five>1) {
                            five-=2;
                        } else {
                            return false;
                        }
                    }
                    break;
            }
        }

        return true;
    }
}
