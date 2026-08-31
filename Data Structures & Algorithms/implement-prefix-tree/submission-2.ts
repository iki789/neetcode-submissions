class TrieNode {
    public children = new Map<string, TrieNode>()
    public endOfWord = false
}

class PrefixTree {
    public root: TrieNode;
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string) {
        let cur = this.root
        for (const letter of word) {
            if (!cur.children.has(letter)) {
                cur.children.set(letter, new TrieNode())
            }
            cur = cur.children.get(letter)!
        }
        cur.endOfWord = true
    }

    search(word: string) {
        let cur = this.root

        for (const letter of word) {
            if (!cur.children.has(letter)) {
                return false
            }
            cur = cur.children.get(letter)
        }

        return cur.endOfWord
    }

    startsWith (word: string) {
        let cur = this.root
        for (const letter of word) {
            if (!cur.children.has(letter)) {
                return false
            }
            cur = cur.children.get(letter)
        }
        return true
    }
}