function User(name, age, location) {

    this.name = name;
    this.age = age;
    this.location = location;
}

User.prototype.getUser = function () {
    console.log(`Hello ${this.name}, How are you. You are ${this.age} years old. living in ${this.location}`);
}

const user2 = new User("Arun", 25, "Bangalore");
user1.getUser();


class User {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getUser() {
        console.log(`Hello ${this.name}, How are you. You are ${this.age} years old. living in ${this.location}`);
    }
}


const user1 = new User("Arun", 25, "Bangalore");
user1.getUser();





