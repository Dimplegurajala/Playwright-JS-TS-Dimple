//1- Odd or Even
isOddOrEven()
function isOddOrEven(){
    let X 
    if (typeof X !== 'number'){
        console.log("No Given Number X")
    }
    else if (X%2 === 0){
        console.log("The given number X is even")
    }
    else{
        console.log("The given number X is odd")
    }
}

