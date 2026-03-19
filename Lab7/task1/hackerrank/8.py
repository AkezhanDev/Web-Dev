from fractions import Fraction
from functools import reduce

def product(fracs):
    t = reduce(lambda x, y: x * y, fracs)
    return t.numerator, t.denominator

if __name__ == '__main__':
    fracs = []
    for _ in range(int(input())):
        n, d = map(int, input().split())
        fracs.append(Fraction(n, d))
    result = product(fracs)
    print(*result)