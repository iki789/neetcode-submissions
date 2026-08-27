class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])
        visited = set()
        islands = 0

        def bfs(row, col):
            q = collections.deque()
            q.append((row, col))
            visited.add((row, col))
            directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

            while q:
                row, col = q.popleft()
                for direction in directions:
                    dr, dc = row + direction[0], col + direction[1]

                    if dr in range(rows) and dc in range(cols) and grid[dr][dc] == "1" and (dr, dc) not in visited:
                            q.append((dr, dc))
                            visited.add((dr, dc))

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == "1" and (row, col) not in visited:
                    bfs(row, col)
                    islands += 1
        return islands
