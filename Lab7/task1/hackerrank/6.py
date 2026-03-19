from collections import Counter

if __name__ == '__main__':
    s = input()
    counts = Counter(s)
    for ch, cnt in sorted(counts.items(), key=lambda x: (-x[1], x[0]))[:3]:
        print(ch, cnt)