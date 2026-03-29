class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {

        //if length is dividible of groupSize continue, if not return false
        if(hand.length%groupSize !== 0) {
            return false;
        }

        hand = hand.sort((a,b) => a-b);

        const mapNumOfEqualsCards = new Map();

        for(let card of hand) {
            mapNumOfEqualsCards.set(card, (mapNumOfEqualsCards.get(card) || 0) + 1);
        }

        let i=0;
        while(i<hand.length) {
            let count = 0;
            let lastElement = null;
            for(let [card,number] of mapNumOfEqualsCards) {
                if(lastElement != card-1 && lastElement) return false;
                if(number == 1) {
                    mapNumOfEqualsCards.delete(card);
                } else {
                    mapNumOfEqualsCards.set(card, mapNumOfEqualsCards.get(card) - 1);
                }
                lastElement = card;
                count++;
                if(count == groupSize) break;
            }
            if(count != groupSize) return false;
            i += groupSize;
        }

        return true;

    }
}
