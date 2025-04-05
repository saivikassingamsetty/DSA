"""
You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.
"""
def removeAnagrams(words: list[str]) -> list[str]:
    resArr = []
    anagrams = {}
    for word in words:
        common = str(sorted(list(word)))
        if common not in anagrams:
            anagrams = {}
            anagrams[common] = 1
            resArr.append(word)
    return resArr