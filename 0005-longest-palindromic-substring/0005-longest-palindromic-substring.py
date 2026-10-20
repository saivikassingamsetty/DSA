class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        start = 0
        bestLen = 0

        def expand(start, end):
            while start >= 0 and end < n and s[start] == s[end]:
                start -= 1
                end += 1
            return start + 1, end - 1

        for i in range(n):
            # for single middle
            first, last = expand(i, i)
            if bestLen < last - first + 1:
                bestLen = last - first + 1
                start = first

            # for double middle
            first, last = expand(i, i + 1)
            if bestLen < last - first + 1:
                bestLen = last - first + 1
                start = first

        return s[start : start + bestLen]
