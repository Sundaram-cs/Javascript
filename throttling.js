let count = 0;

function showCounter(x) {
   count++;
   console.log(`Call ${count}:`, x);
}

function throttle(fx, time) {
    let id = null;

    return function (x) {
        if (!id) {
            fx(x); 
            id = setTimeout(() => {
                id = null; 
            }, time);
        }
    };
}

let showCounterT = throttle(showCounter, 2000);

setTimeout(() => showCounterT("A"), 1000); // Executes at 1s
setTimeout(() => showCounterT("B"), 2000); // Ignored (within 3s limit)
setTimeout(() => showCounterT("C"), 2500); // Ignored (within 3s limit)
setTimeout(() => showCounterT("D"), 4000); // Executes at 4s (since 3s has passed)
