function numberOneTriangle(n){
    
    for(let i = 0; i<n;i++){
        let tamgiac = ""
        for ( let j = 0; j <= i;j++){
           tamgiac += "*"
        }
        console.log(tamgiac)
    }
}
numberOneTriangle(4)