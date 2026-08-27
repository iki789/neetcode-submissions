class TrieNode {
    public children: (TrieNode | null)[]
    public endOfWord: boolean
    constructor() {
        this.children = new Array(26).fill(null)
        this.endOfWord = false
    }
}

class PrefixTree {
    public root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root
        for (let c of word) {
            let i = c.charCodeAt(0) - 97
            if (cur.children[i] === null) {
                cur.children[i] = new TrieNode()
            }
            cur = cur.children[i]
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root;
        for (let c of prefix) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return true;
    }
}
