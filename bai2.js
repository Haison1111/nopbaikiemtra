function numberOneTriangle(n){
    if ( n<=10 && n > 0){
    for(let i = 0; i < n;i++){
        let tamgiac = ""
        for ( let j = 0; j <= i;j++){
           tamgiac += "*"
        }
        console.log(tamgiac)
    }
} else{
    return false;
}
}
numberOneTriangle(4)