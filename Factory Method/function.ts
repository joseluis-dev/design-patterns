export {};

interface RoleProduct {
  operation(): string;
}

// Base "Creator" factory function
// Instead of an abstract class, we take the factory method as a parameter
interface PersonCreator {
  getName(): string;
  someOperation(): string;
}

function createPersonCreator(name: string, createRole: () => RoleProduct): PersonCreator {
  return {
    getName() {
      return name;
    },
    someOperation() {
      const role = createRole();
      return `Creator: I created a role product and called its operation -> ${role.operation()}`;
    }
  };
}

// Factory functions for Products
function createAdminRole(name: string): RoleProduct {
  return {
    operation() {
      return `Admin operation for ${name}`;
    }
  };
}

function createUserRole(name: string): RoleProduct {
  return {
    operation() {
      return `User operation for ${name}`;
    }
  };
}

// Concrete "Creator" factory functions
function createAdminCreator(name: string): PersonCreator {
  return createPersonCreator(name, () => createAdminRole(name));
}

function createUserCreator(name: string): PersonCreator {
  return createPersonCreator(name, () => createUserRole(name));
}

// Client code
function clientCode(person: PersonCreator) {
  console.log("Client: I don't care which concrete person I got.");
  console.log(person.someOperation());
  console.log(`Hello, ${person.getName()}`);
}

const admin = createAdminCreator('Alice');
const user = createUserCreator('Bob');

clientCode(admin);
clientCode(user);
