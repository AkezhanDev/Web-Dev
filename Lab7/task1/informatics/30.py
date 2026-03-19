n = int(input())
a = list(map(int, input().split()))
ans = "NO"
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        ans = "YES"
        break
print(ans)