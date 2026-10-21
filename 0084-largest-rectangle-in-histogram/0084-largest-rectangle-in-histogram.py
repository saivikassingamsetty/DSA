class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        maxArea = 0

        # fake one to clear off the stack by complete the process
        heights.append(0)

        for i in range(len(heights)):
            while stack and heights[stack[-1]] >= heights[i]:
                # remove it, future heights wont need this, we have lesser one in middle (current)
                idx = stack.pop()

                # left boundary is last height bar before popped item, right is current
                maxArea = max(maxArea, heights[idx] * (i - (stack[-1] + 1 if stack else 0)))
            
            stack.append(i)

        return maxArea
