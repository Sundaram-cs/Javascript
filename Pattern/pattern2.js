function pattern2(n) {

    for(let i=0; i<n; i++) {

        let line=""        
        for(let k=0; k<=i; k++) {
            line+= "*"
        }

        console.log(line)

    }
}


pattern2(5);