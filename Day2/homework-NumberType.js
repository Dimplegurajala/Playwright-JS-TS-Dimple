//2- Number Type >0 or <0 or = 0

function numberType(){
    let Y = 28
    //Y = Number(Y)
    if (isNaN(Y)){
        console.log("No given number or invalid input")
    }
    else if (Y > 0){
        console.log("The given number is greater than zero")
    }
    else if (Y<0){
        console.log("The given number is less than zero")
    }
    else{
        console.log("The given number is zero")
    }
}
numberType();



