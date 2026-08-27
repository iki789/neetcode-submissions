class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0])
        pac, atl = set(), set()
        res = []


        def dfs(row, col, visit, prevHeight):
            if ((row, col) in visit or 
                row < 0 or col < 0 or
                row == rows or col == cols or 
                heights[row][col] < prevHeight):
                    return
            visit.add((row, col))
            directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
            for dr in directions:
                r, c = row + dr[0], col + dr[1]
                dfs(r, c, visit, heights[row][col])
            # dfs(row + 1, col, visit, heights[row][col])
            # dfs(row - 1, col, visit, heights[row][col])
            # dfs(row, col + 1, visit, heights[row][col])
            # dfs(row, col - 1, visit, heights[row][col])


        for col in range(cols):
            dfs(0, col, pac, heights[0][col])
            dfs(rows - 1, col, atl, heights[rows - 1][col])

        for row in range(rows):
            dfs(row, 0, pac, heights[row][0])
            dfs(row, cols - 1, atl, heights[row][cols - 1])
        
        for row in range(rows):
            for col in range(cols):
                if (row, col) in pac and (row, col) in atl:
                    res.append([row, col])
        return res
                
        