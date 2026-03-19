if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    scores = sorted(set(score for name, score in students))
    second = scores[1]
    names = sorted(name for name, score in students if score == second)
    for name in names:
        print(name)