class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        for(let op of operations){
            switch(op) {
                case "+":
                    let firstElPlus = record.length-1 >= 0 ? record[record.length-1] : 0;
                    let secondElPlus = record.length-2 >= 0 ? record[record.length-2] : 0;
                    record.push(firstElPlus+secondElPlus);
                    break;
                case "D":
                    let firstElPer = record.length-1 >= 0 ? record[record.length-1] : 0;
                    record.push(firstElPer*2);
                    break;
                case "C":
                    record.pop();
                    break;
                default:
                    record.push(Number(op));
                    break;
            }
        }
        return record.reduce((sum,n) => sum+n,0);
    }
}
