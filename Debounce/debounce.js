let count = 0;

// function counter(x) {
//     count++;
//     console.log({count});
// }

// function debounce(fx,time) {

//     let id = null;

//     return function(x) {

//         if(id) {
//             clearTimeout(id);
//         } 

//         id = setTimeout(()=>{
//             fx(x);
//             id = null;
//         },time)

//     }
// }

function counter(x) {
    count++;
    console.log(count)
}

function debounce(fx) {
    let id = null;

    return function (x, time) {

        if (id) {
            clearTimeout(id);
        }

        id = setTimeout(() => {
            fx(x);
            id = null
        }, time)
    }
}

let showCountD = debounce(counter, 1000);

setTimeout(showCountD, 1000);
setTimeout(showCountD, 1500);
setTimeout(showCountD, 2700);
setTimeout(showCountD, 4000);


let el = document.getElementById("text1");
let output = document.getElementById("output");



el.addEventListener("keyup",debounce(function(e){
    output.innerHTML = e.target.html
}))


