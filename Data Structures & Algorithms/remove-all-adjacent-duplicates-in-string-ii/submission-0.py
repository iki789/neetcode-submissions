class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        if len(s) < k:
            return s
        characterCount = [] # [[character, count], ...]
        result = ''

        for i in range(len(s)):
            if characterCount and characterCount[-1][0] == s[i]:
                characterCount[-1][1] = characterCount[-1][1]+1
            else:
                characterCount.append([s[i], 1])
            if characterCount[-1][1] == k:
                characterCount.pop()

        for i in range(len(characterCount)):
            result += characterCount[i][0] * characterCount[i][1]
        return result

        