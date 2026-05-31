from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        potentialWinners = deque()
        winners = []
        
        for i in range(len(nums)):
            # remove useless, better candidate came
            while len(potentialWinners) and nums[i] > potentialWinners[-1][0]:
                potentialWinners.pop()
            # push better candidate
            potentialWinners.append((nums[i], i))

            if i >= k - 1:
                # store
                winners.append(potentialWinners[0][0])
                # remove old/stale candidates
                while len(potentialWinners) and potentialWinners[0][1] <= i - k + 1:
                    potentialWinners.popleft()

        return winners

