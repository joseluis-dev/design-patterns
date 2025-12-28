export {};

interface RoleProduct {
  operation(): string;
}

abstract class PersonCreator {
  constructor(protected name: string) {}

  public abstract createRole(): RoleProduct;

  public getName(): string {
    return this.name;
  }

  public someOperation(): string {
    const role = this.createRole();
    return `Creator: I created a role product and called its operation -> ${role.operation()}`;
  }
}

class AdminCreator extends PersonCreator {
  public createRole(): RoleProduct {
    return new AdminRole(this.name);
  }
}

class UserCreator extends PersonCreator {
  public createRole(): RoleProduct {
    return new UserRole(this.name);
  }
}

class AdminRole implements RoleProduct {
  constructor(private name: string) {}

  operation(): string {
    return `Admin operation for ${this.name}`;
  }
}

class UserRole implements RoleProduct {
  constructor(private name: string) {}

  operation(): string {
    return `User operation for ${this.name}`;
  }
}

function clientCode(person: PersonCreator) {
  console.log("Client: I don't care which concrete person I got.");
  console.log(person.someOperation());
  console.log(`Hello, ${person.getName()}`);
}

const admin = new AdminCreator('Alice');
const user = new UserCreator('Bob');

clientCode(admin);
clientCode(user);