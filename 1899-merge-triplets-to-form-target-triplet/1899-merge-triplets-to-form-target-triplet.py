class Solution:
    def mergeTriplets(self, triplets: list[list[int]], target: list[int]) -> bool:
        filteredTriplets = list(filter(
            lambda triplet: triplet[0] <= target[0] and triplet[1] <= target[1] and triplet[2] <= target[2],
            triplets,
        ))

        if len(filteredTriplets) == 0:
            return False

        maxTriplet = [0, 0, 0]
        for x, y, z in filteredTriplets:
            maxTriplet[0] = max(x, maxTriplet[0])
            maxTriplet[1] = max(y, maxTriplet[1])
            maxTriplet[2] = max(z, maxTriplet[2])

        for i in range(3):
            if target[i] != maxTriplet[i]:
                return False

        return True
