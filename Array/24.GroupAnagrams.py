"""
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

"""
def groupAnagrams(strs: list[str]) -> list[list[str]]:
    anagrams = {}
    for s in strs:
        sortedS = str(sorted(list(s)))
        if sortedS in anagrams: anagrams[sortedS] += [s]
        else: anagrams[sortedS] = [s]
    return list(anagrams.values())