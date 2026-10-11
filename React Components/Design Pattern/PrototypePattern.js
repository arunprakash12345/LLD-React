function User(name) {
    this.name = name;
}

User.prototype.getName = function () {
    return this.name;
};

const user1 = new User("Arun");
const user2 = new User("Priya");

console.log(user1.name);
// Arun

console.log(user1.hasOwnProperty("name"));
// true

console.log(user1.hasOwnProperty("getName"));
// false

console.log(user1.getName === user2.getName);
// true

console.log(Object.getPrototypeOf(user1) === User.prototype);
// true


// -------_--_-_--_-_-_-__---_-_-_----_----_-_-_-_-_-_-__-_-_--_--__-_-__--_-_-_-_--__-__-_--_-_-_--_-_-__-_--_-__-__-_-__-__-_-_-__-_-_--_--_-__-_-_-_--_


// Phase 2:
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

class Moderator extends User {
    constructor(name, community) {
        super(name);
        this.community = community;
    }

    deletePost() {
        return `${this.name} deleted a post`;
    }
}

const mod = new Moderator("Arun", "Chennai");

console.log(mod.greet());
console.log(mod.deletePost());