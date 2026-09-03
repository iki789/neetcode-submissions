/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const nodesMap = new Map<number, [number, number][]>()
        for (const [u, v, cost] of times) {
            if (!nodesMap.has(u)) nodesMap.set(u, [])
            nodesMap.get(u)!.push([v, cost])
        }

        const minHeap = new MinPriorityQueue((entry) => entry[1]);
        minHeap.enqueue([k, 0])
        const visited = new Set<number>()

        let time = 0 
        while (!minHeap.isEmpty()) {
            const [curNode, curWeight] = minHeap.dequeue()

            if (visited.has(curNode)) continue
            visited.add(curNode)
            time = curWeight
            const edges = nodesMap.get(curNode)
            if (edges) {
                for (const edge of edges) {
                    if (!visited.has(edge[0])) {
                        minHeap.enqueue([edge[0], edge[1] + curWeight])
                    }
                }
            }
        }

        return visited.size === n ? time : -1

    }
}
