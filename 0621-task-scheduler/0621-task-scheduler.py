class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # technically take the empty space as needed and fill them up
        # so maxCount - 1 * (n+1) rows + last row with characters of max Count (since each char should have n gap)
        counts = Counter(tasks).values()
        maxCount = max(counts)
        charCountWithMaxCount = sum(1 for c in counts if c == maxCount)
        
        #actually there can be many takss which may overflow our grid especially when maxCount is small and n is small, so we need to check the task lengthn as well
        # When there are so many tasks that they naturally fill all idle slots and overflow, no idle time is needed, you just run all tasks back to back.
        return max(len(tasks), (maxCount - 1) * (n + 1) + charCountWithMaxCount)