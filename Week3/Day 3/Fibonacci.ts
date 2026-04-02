//fibonacci

function fibonacci(n:number):number{
    if (n<0){
        throw new Error("Input must be non-negative number")
    }
    if (n===0){
        return 0;
    } 
    if (n===1){
        return 1;
    } 
    let first : number = 0
    let second: number =1
    let nthNumber:number=0
    for(let i:number =2; i<=n;i++){
        nthNumber = first+second
        first = second
        second=nthNumber
    }
    return second
}
console.log(fibonacci(12))