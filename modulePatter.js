const countModule = (function(){
    let count = 0;

    return {
        increment:()=>++count,
        decrement:()=>--count,
        getCount:()=>count
    }
})()

countModule.increment();
countModule.increment();
console.log(countModule.getCount());