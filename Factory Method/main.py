from __future__ import annotations
from abc import ABC, abstractmethod

class Person(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class PersonCreator(ABC):
    
    def __init__(self, name: str) -> None:
        self.name = name

    @abstractmethod
    def create_person(self) -> Person:
        pass

    def get_name(self) -> str:
        return self.name

    def some_operation(self) -> str:
        person = self.create_person()
        return f"Creator: I created a role product and called its operation -> {person.operation()}"

class AdminCreator(PersonCreator):
    def create_person(self) -> Person:
        return Admin(self.name)

class UserCreator(PersonCreator):
    def create_person(self) -> Person:
        return User(self.name)

class Admin(Person):
    def __init__(self, name: str) -> None:
        super().__init__()

    def operation(self):
        return "Admin: Managing system settings."

class User(Person):
    def __init__(self, name: str) -> None:
        super().__init__()

    def operation(self):
        return "User: Accessing user features."

def client_code(creator: PersonCreator) -> None:
    print(f"Client: I'm not aware of the creator's class, but it still works.\n"
          f"{creator.some_operation()}")
    print(f"Hello, {creator.get_name()}")

if __name__ == "__main__":
    print("App: Launched with the AdminCreator.")
    client_code(AdminCreator("Alice"))

    print("\n")

    print("App: Launched with the UserCreator.")
    client_code(UserCreator("Bob"))