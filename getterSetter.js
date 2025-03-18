class User {

    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(_fullName) {
        this.firstName = _fullName.split(" ")[0];
        this.lastName = _fullName.split(" ")[1];
    }

}

let user = new User("Shita","Ram");

console.log(user.fullName)
user.fullName = "Radhe Krishna"
console.log(user.fullName)

user.fullName = "jai Mahadev"
console.log(user.fullName)