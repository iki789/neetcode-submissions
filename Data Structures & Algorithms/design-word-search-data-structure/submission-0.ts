class TrieNode {
    public children: (TrieNode | null)[]
    public endOfWord: boolean
    constructor() {
        this.children = Array.from({length: 26}, () => null)
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
            const charIdx = c.charCodeAt(0) - 97
            if (cur.children[charIdx] === null) {
                cur.children[charIdx] = new TrieNode()
            }
            cur = cur.children[charIdx]
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    private dfs(word: string, startIdx: number, root: TrieNode | null): boolean {
        let cur = root

        for (let i = startIdx; i < word.length; i++) {
            if (word[i] === '.') {
                for (const child of cur.children){
                    if (child !== null && this.dfs(word, i + 1, child)) {
                        return true
                    }
                }
                return false
            }
            const charIdx = word[i].charCodeAt(0) - 97
            if (cur.children[charIdx] === null) {
                return false
            }
            cur = cur.children[charIdx]
        }
        return cur.endOfWord
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.root)
    }
}
