/// checking sum zero


function checkSumZero(arr) {
   

    for(let number of arr) {
        for(let j=1;j<arr.length;j++) {

            if(number + arr[j] == 0) {
                return [number, arr[j]]
            }
        }
    }
}

let result = checkSumZero([-5,-4,-3,-2,-1,1,2,3,4,8])

console.log(result); // [-4,4] complexity is o(n^2)