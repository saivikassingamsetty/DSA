"""
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
"""
def findDuplicate(nums: list[int]) -> int:
        slow = fast = nums[0]
        #find intersection
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        #find starting point of loop.
        slow = nums[0]
        while slow!=fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow