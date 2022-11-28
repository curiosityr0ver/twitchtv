n = int(input())
m = int(input())

s = [i for i in range(1, n + 1)]
x = s.copy()
for i in range(m):
    y = int(input())
    if y == 1:
        x = s
    elif y == 2:
        for j in x:
            if j % 2 == 0:
                x.remove(j)
    elif y == 3:
        for j in x:
            if j % 2 != 0:
                x.remove(j)
    else:
        x = []
print(len(x))
