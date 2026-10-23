class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []

        def backtrack(start, parts):
            if start == len(s):
                res.append(parts[:])
                return

            for end in range(start + 1, len(s) + 1):
                ns = s[start : end]
                if ns == ns[::-1]:
                    parts.append(ns)
                    backtrack(end, parts)
                    parts.pop()

        backtrack(0, [])
        return res
