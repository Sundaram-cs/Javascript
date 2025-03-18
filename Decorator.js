function isLogged(car) {
    car.logSpeed = function() {
        console.log(`Your car speed is : ${car.speed} km/h`);
    }

    return car;
}

let car = {speed:100};

let result = isLogged(car);

console.log(result.logSpeed());