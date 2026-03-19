from animal import Animal
from dog import Dog
from cat import Cat

animal = Animal("Buddy", 5, "Brown")
dog = Dog("Rocky", 3, "Black", "Labrador")
cat = Cat("Misty", 2, "White", 9)

animals = [animal, dog, cat]

for obj in animals:
    print(obj)
    print(obj.eat())
    print(obj.sleep())
    print(obj.speak())
    print()

print(dog.fetch())
print(cat.climb())