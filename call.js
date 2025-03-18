function SetUsername(username) {
    this.username = username;
    
}

function createUsername(username,gmail,password) {
    SetUsername.call(this,username);

    this.gmail = gmail;
    this.password = password;
}

let chai = new createUsername("mahadev","mahadev@gmail.coom",'123');

// console.log(chai);


let userObj1 = {
    name:'Shree Ram',
    age:29,
    destination:'Software engineer',
}

let userObj2 = {
    name:'Mahadev',
    age:29,
    destination:'Software engineer',
}

let printMe = function(city,country) {
    console.log(this.name+" "+city+" "+country);
}

// printMe.call(userObj1,"Prayagraj");


printMe.apply(userObj1,["Prayagraj","India"]);

printMe.call(userObj2,'Kashi');



