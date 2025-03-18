function FindSumZero(array) {
    let left=0;
    let right = array[array.length-1];

    while(left < right) {

        let sum = array[left] + array[right];
        
        if(sum == 0) {
            return [array[left],array[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++
        }
        
    }
}

let result = FindSumZero([-5,-4,-3,-2,-1,1,2,3,4,6,8])
console.log(result);