def make_chocolate(small, big, goal):
    use_big = min(big, goal // 5)
    rest = goal - use_big * 5
    if rest <= small:
        return rest
    return -1