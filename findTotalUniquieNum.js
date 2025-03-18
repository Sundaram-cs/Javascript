function findUniquieNum(array) {

    if(array.length > 0) {

        let i=0;
        
        for(let j=1;j<array.length;j++) {

            if(array[i]!=array[j]) {
                i++;
                array[i] = array[j]
            }
        }

        return i+1

    }
}

let result = findUniquieNum([1,1,2,3,4,4,6,7,8,8,9,9,34,45]);
console.log(result);

