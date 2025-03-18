function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    return this.name
}


let user = new User("Ram");

console.log(user.sayHi());