from animal import Animal

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball."

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"