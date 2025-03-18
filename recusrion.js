let counter = 1;

function demo(number) {
    if(counter > number) return true;

    console.log("Har Har Mahadev ",counter);
    counter++;
    demo(number);
}

demo(10);
