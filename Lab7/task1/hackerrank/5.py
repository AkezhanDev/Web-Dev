from collections import OrderedDict

if __name__ == '__main__':
    d = OrderedDict()
    for _ in range(int(input())):
        item = input().rsplit(' ', 1)
        name = item[0]
        price = int(item[1])
        d[name] = d.get(name, 0) + price
    for name, total in d.items():
        print(name, total)