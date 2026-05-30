class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        maxProfit = 0
        for i in range(len(prices)):
            maxProfit = max(maxProfit, prices[i] - minPrice)
            minPrice = min(minPrice, prices[i])
        return maxProfit