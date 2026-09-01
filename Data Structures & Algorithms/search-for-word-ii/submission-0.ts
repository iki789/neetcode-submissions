class TrieNode  {
    public children: Map<string, TrieNode>
    public endOfWord: boolean

    constructor() {
        this.children = new Map<string, TrieNode>()
        this.endOfWord = false
    }
}

class WordTrie {
    public root: TrieNode;
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let cur = this.root

        for (const letter of word) {
            if (!cur.children.has(letter)) {
                cur.children.set(letter, new TrieNode())
            }
            cur = cur.children.get(letter)
        }
        cur.endOfWord = true
    }

    getPrefix (word: string): TrieNode {
        let cur = this.root
        for (const letter of word) {
            if (!cur.children.has(letter)) {
                cur.children.set(letter, new TrieNode())
            }
            cur = cur.children.get(letter)
        }
        return cur
    }

}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        const trie = new WordTrie()
        for (const word of words) {
            trie.insert(word)
        }
        const root = trie.root

        const rows = board.length 
        const cols = board[0].length
        const visited = new Set()
        const directions = [[0, 1], [-1, 0], [1, 0], [0, -1]]
        const foundWords = new Set<string>()
        
        const dfs = (r: number, c: number, node: TrieNode, word: string) => {
            
            if (r < 0 || c < 0 || r >= rows || c >= cols || visited.has(`${r},${c}`) || !node.children.has(board[r][c])) {
                return
            }
            visited.add(`${r},${c}`)
            node = node.children.get(board[r][c])
            word += board[r][c]
            if (node.endOfWord) {
                foundWords.add(word)
            } 
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, node, word )
            }
            visited.delete(`${r},${c}`)
        }
        
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root, '')
            }
        }
        return [...foundWords]
    }
}
