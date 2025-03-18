///// num = < array
//// array.length - num + 1; 
//// [1,33,2,4,6,7,8,9,6,34]

function findSum(array,num) {

    if(num<array.length) {
        
        let max=0;
        for(let i=0; i<array.length-num+1; i++) {
            
            let temp = 0;

            for(let j=0; j<num; j++) {
                temp+=array[i+j];
            }

            if(max<temp) {
                max = temp;
            }

        }
        return max;
    }
}

const result = findSum([1,33,2,4,6,7,8,9,6,34],4);

console.log(result);


