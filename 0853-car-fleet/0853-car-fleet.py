class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # key insight, how long does it take for each car to reach target
        combined = [(position[i],speed[i]) for i in range(len(position))]
        # sort by farthest to closest
        combined.sort(key = lambda x: x[0])
        # time takes to reach
        time = [(target - p) / s for p,s in combined]
        # we maintain monotonically increasing
        fleets = []

        for i in range(len(time) -1, -1, -1):
            # if fleets empty or last known fleet is faster than current vehicle, start a new fleet
            if not fleets or fleets[-1] < time[i]:
                fleets.append(time[i])
        
        return len(fleets)
