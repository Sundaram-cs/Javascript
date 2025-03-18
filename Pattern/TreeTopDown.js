function TreeTopDown(n){

    
    for(let i=0; i<n; i++) {
        let line = "";
        for(let j=i; j>0; j--) {
            line+= " "
        }

        for(let k=i; k<n; k++) {
            line+= "* "
        }

        console.log(line);
    }
}

TreeTopDown(5);