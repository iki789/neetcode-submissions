class TrieNode {
    public children: Map<string, TrieNode>
    public endOfWord: boolean
    constructor () { 
        this.children = new Map()
        this.endOfWord = false
    }

    insert(word: string) {
        let cur: TrieNode = this
        for (const letter of word) {
            if (!cur.children.has(letter)) {
                cur.children.set(letter, new TrieNode())
            }
            cur = cur.children.get(letter)!
        } 
        cur.endOfWord = true
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        const directions = [[0,1], [1,0], [-1, 0], [0, -1]]
        const foundWords = new Set<string>()
        const rowsLength = board.length
        const colsLength = board[0].length
        const trieNode = new TrieNode()
        const visited = new Set<string>()

        for (const word of words) {
            trieNode.insert(word)
        }


        const dfs = (r: number, c: number, node: TrieNode, word: string) => {
            if (r < 0 || c < 0 || r >= rowsLength || c  >= colsLength || visited.has(`${r},${c}`) || !node.children.has(board[r][c])) {
                return 
            }
            visited.add(`${r},${c}`)
            node = node.children.get(board[r][c])
            
            word += board[r][c]
            if (node.endOfWord === true) {
                foundWords.add(word)
            }
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, node, word)
            }
            visited.delete(`${r},${c}`)
        }

        for (let r = 0; r < rowsLength; r++) {
            for (let c = 0; c < colsLength; c++) {
                dfs(r, c, trieNode, '')
            }
        }
        return [...foundWords]
    }
}
