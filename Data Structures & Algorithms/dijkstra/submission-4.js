/**
 * const PriorityQueue = require('priority-queue-js');
 */


class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const routes = new Map()

        for (const [u, v, w] of edges) {
            if (!routes.has(u)) routes.set(u, [])
            routes.get(u).push([v, w])
        }

        const pq = new PriorityQueue((a, b) =>  a[1] - b[1])
        pq.enqueue([src, 0])
        const bestCosts = {}

        while (!pq.isEmpty()) {
            const [curNode, curCost] = pq.dequeue()
            const prevCost = bestCosts[curNode]

            if (bestCosts.hasOwnProperty(curNode)) continue

            if (prevCost === undefined || curCost < prevCost) {
                bestCosts[curNode] = curCost
            }

            const neighbors = routes.get(curNode)
            if (!neighbors) continue
            for (const [node, weight] of neighbors) {
                if (!bestCosts.hasOwnProperty(node)) {
                    const newCost = curCost + weight
                    pq.enqueue([node, newCost])
                }
            }
        }
        for (let i = 0; i < n; i++) {
            if (!bestCosts.hasOwnProperty(i)) {
                bestCosts[i] = -1
            }
        }
        return bestCosts
    }
}
