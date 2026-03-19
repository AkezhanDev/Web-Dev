class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} is eating."

    def sleep(self):
        return f"{self.name} is sleeping."

    def speak(self):
        return f"{self.name} makes a sound."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"