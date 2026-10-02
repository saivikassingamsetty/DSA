from collections import Counter

class Solution:
    def isNStraightHand(self, hand: list[int], groupSize: int) -> bool:
        if len(hand) % groupSize > 0:
            return False

        counter = Counter(hand)
        potentialStartPoints = sorted(set(hand))

        for start in potentialStartPoints:
            # start the group with smallest possible
            while counter[start] > 0:
                # pick the group
                for target in range(start, start + groupSize):
                    if counter[target] == 0:
                        return False
                    # remove from counter (available numbers)
                    counter[target] -= 1
            
        return True
                




