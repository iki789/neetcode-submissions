class TrieNode {
    public children: Map<string, TrieNode>
    public endOfWord: boolean
    constructor() {
        this.children = new Map<string, TrieNode>()
        this.endOfWord = false
    }
}

class WordDictionary {
    private root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.root
        for (const c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode())
            }
            cur = cur.children.get(c)
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    searchDFS(word: string, startIdx: number, trieNode: TrieNode): boolean {
        let cur = trieNode
        for (let i = startIdx; i < word.length; i++) {
            if (word[i] === '.') {
                for (const [_, child] of cur.children) {
                    if (this.searchDFS(word, i + 1, child)) {
                        return true
                    }
                }
                return false
            } else {
                if (!cur.children.has(word[i])) {
                    return false
                }
                cur = cur.children.get(word[i])!
            }
        }
        return cur.endOfWord
    }

    search(word: string) {
        return this.searchDFS(word, 0, this.root)
    }
}
