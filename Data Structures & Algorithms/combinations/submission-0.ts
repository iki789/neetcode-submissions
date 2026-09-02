class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n: number, k: number): number[][] {
        const result = []
        const current = []

        const backtrack = (i: number) => {
            if (i > n) {
                if (current.length === k) {
                    result.push([...current])
                }
                return
            }

            current.push(i)
            backtrack(i + 1)

            current.pop()
            backtrack(i + 1)
        }

        backtrack(1)
        return result
    }
}
