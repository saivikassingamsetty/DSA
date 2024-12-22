"""
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
"""
import random
class Solution:

    def __init__(self, nums: list[int]):
        self.original = nums

    def reset(self) -> list[int]:
        return self.original

    def shuffle(self) -> list[int]:
        ans = list(self.original)
        for i in range(len(ans)):
            j = random.randrange(i+1)
            ans[i], ans[j] = ans[j], ans[i]
        return ans


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()