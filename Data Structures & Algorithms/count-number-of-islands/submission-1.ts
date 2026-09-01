class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length
        const cols = grid[0].length
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        
        let islands = 0

        const dfs = (r: number, c: number) => {
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
                return 
            }

            grid[r][c] = '0'
            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc)
            }
        }

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c)
                    islands += 1
                }
            }
        }
        return islands
    }
}
