class Solution:
    def checkValidString(self, s: str) -> bool:
        opened = []
        stars = []

        for i, ch in enumerate(s):
            if ch == '(':
                opened.append(i)
            elif ch == '*':
                stars.append(i)
            else:
                if len(opened):
                    opened.pop()
                elif len(stars):
                    stars.pop()
                else:
                    return False

        while len(opened) and len(stars):
            if stars[-1] < opened[-1]:
                return False

            opened.pop()
            stars.pop()

        return len(opened) == 0
