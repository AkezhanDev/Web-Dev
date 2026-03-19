import re

for _ in range(int(input())):
    uid = input().strip()
    valid = True
    if len(uid) != 10:
        valid = False
    elif not uid.isalnum():
        valid = False
    elif len(set(uid)) != 10:
        valid = False
    elif sum(c.isupper() for c in uid) < 2:
        valid = False
    elif sum(c.isdigit() for c in uid) < 3:
        valid = False
    print('Valid' if valid else 'Invalid')