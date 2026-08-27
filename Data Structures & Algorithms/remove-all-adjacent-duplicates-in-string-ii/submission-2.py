class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        if len(s) < k:
            return s
        characterCount = [] # [[character, count], ...]

        for i in range(len(s)):
            if characterCount and characterCount[-1][0] == s[i]:
                characterCount[-1][1] = characterCount[-1][1]+1
            else:
                characterCount.append([s[i], 1])
            if characterCount[-1][1] == k:
                characterCount.pop()

        return ''.join(char * count for char, count in characterCount)

        