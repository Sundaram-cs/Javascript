function pattern(n) {
    let space = 4;

    for(let i=0; i<n; i++) {

        let line = "";

        for(let j=space; j>0; j--) {

            line+= " ";
        }

        for(let k=0; k<=i; k++) {
            line+= "* ";
        }

        console.log(line);
        space--;

    }

}

pattern(5);