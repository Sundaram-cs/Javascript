
function selectionSort(arr) {
    
    for(let i=0;i<arr.length;i++) {
        let min = i;
        for(let j=i+1;j<arr.length;j++) {

            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        
        if(i!=min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }

    return arr

}

const result = selectionSort([5,4,7,2,77,43,12,90,22,8,3,4]);

console.log(result);