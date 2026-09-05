class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let L = 0
        let R = heights.length - 1
        let maxArea = 0

        while (L < R ) {
            const height = Math.min(heights[L], heights[R])
            const area = (R - L) * height

            maxArea = Math.max(maxArea, area)

            if (heights[L] < heights[R]) {
                L += 1
            } else {
                R -= 1
            }
        }

        return maxArea
    }
}
