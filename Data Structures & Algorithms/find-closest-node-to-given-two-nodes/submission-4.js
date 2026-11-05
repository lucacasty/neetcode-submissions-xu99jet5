class Solution {
    /**
     * @param {number[]} edges
     * @return {number}
     */
    closestMeetingNode(edges, node1, node2) {
        const mapVisitedNodesFrom1 = new Map();

        let node = node1;
        let count = 0;
        while(!mapVisitedNodesFrom1.has(node) && node != -1) {
            mapVisitedNodesFrom1.set(node,count);
            node=edges[node];
            count++;
        }
        console.log(mapVisitedNodesFrom1);

        const mapVisitedNodesFrom2 = new Map();
        node = node2;
        count = 0;
        while(!mapVisitedNodesFrom2.has(node) && node != -1) {
            mapVisitedNodesFrom2.set(node,count);
            node=edges[node];
            count++;
        }
        console.log(mapVisitedNodesFrom2);

        let minDistance = Infinity;
        let minDistanceId = -1;
        for(const node of mapVisitedNodesFrom1.entries()) {
            if(mapVisitedNodesFrom2.has(node[0])) {
                let maxDistanceFromNodes = Math.max(mapVisitedNodesFrom2.get(node[0]),node[1]);
                if(maxDistanceFromNodes < minDistance) {
                    minDistance = maxDistanceFromNodes;
                    minDistanceId = node[0];
                } else if(maxDistanceFromNodes == minDistance && node[0]<minDistanceId) {
                    minDistanceId = node[0];
                }
            }
        }

        return minDistanceId;
    }
}
