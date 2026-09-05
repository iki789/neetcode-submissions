class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>()

        for (const word of strs) {
            // go through all letters to normalize
            const normalizedArray = Array.from({length: 26}, (_, i) => i)
            for (const letter of word) {
                normalizedArray[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const normalizedKey = normalizedArray.join(',')
            if (!anagrams.has(normalizedKey)) {
                anagrams.set(normalizedKey, [])
            }

            anagrams.get(normalizedKey)!.push(word)
        }

        return Array.from(anagrams.values())
    }
}
