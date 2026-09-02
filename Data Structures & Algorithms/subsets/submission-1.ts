class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result = []
        const current = []
        
        const dfs = (i: number) => {
            if (i >= nums.length) {
                result.push([...current])
                return
            }

            current.push(nums[i])
            dfs(i + 1)

            current.pop()
            dfs(i + 1)
        }

        dfs(0)

        return result
    }
}