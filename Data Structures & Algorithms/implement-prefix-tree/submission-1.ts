class TrieNode {
    public children: (TrieNode | null)[]
    public endOfWord: boolean
    constructor() {
        this.children = Array.from({length: 26}, () => null)
        this.endOfWord = false
    }
}

class PrefixTree {
    public root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let cur = this.root
        for (const c of word) {
            const charIdx = c.charCodeAt(0) - 97
            if (cur.children[charIdx] === null) {
                cur.children[charIdx] = new TrieNode()
            }
            cur = cur.children[charIdx]
        }
        cur.endOfWord = true
    }

    search(word: string) {
        let cur = this.root
        for (const c of word) {
            const charIdx = c.charCodeAt(0) - 97
            if (cur.children[charIdx] === null) {
                return false
            }
            cur = cur.children[charIdx]
        }
        return cur.endOfWord
    }

    startsWith(prefix: string) {
        let cur = this.root
        for (const c of prefix) {
            const charIdx = c.charCodeAt(0) - 97
            if (cur.children[charIdx] === null) {
                return false
            }
            cur = cur.children[charIdx]
        }
        return true
    }
}