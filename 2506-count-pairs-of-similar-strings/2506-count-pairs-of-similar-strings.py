class Solution:
    def similarPairs(self, words: List[str]) -> int:
        sets = collections.defaultdict(int)
        res = 0

        for word in words:
            key = frozenset(word)
            res += sets[key]
            sets[key] += 1
        
        return res