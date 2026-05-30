class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        track = {}
        start = 0
        maxLength = 0

        for end in range(len(s)):
            # rule out invalid window
            if s[end] in track and start <= track[s[end]]:
                start = track[s[end]] + 1

            # track the current
            track[s[end]] = end 
            
            # calculate the length
            maxLength = max(maxLength, end - start + 1)

        return maxLength