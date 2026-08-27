class Solution:
    def isPalindrome(self, s: str) -> bool:
        L, R = 0, len(s) - 1

        while L < R:
            while L < R and not self.isAlpha(s[L]):
                L += 1
            while R > L and not self.isAlpha(s[R]):
                R -= 1

            if s[L].lower() != s[R].lower():
                return False
            L += 1
            R -= 1
        return True
  
    def isAlpha(self, c):
        return (
            ord('A') <= ord(c) <= ord('Z') or
            ord('a') <= ord(c) <= ord('z') or
            ord('0') <= ord(c) <= ord('9')
        )
