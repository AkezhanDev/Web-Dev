from animal import Animal

class Cat(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        self.lives = lives

    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing the tree."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, lives={self.lives})"