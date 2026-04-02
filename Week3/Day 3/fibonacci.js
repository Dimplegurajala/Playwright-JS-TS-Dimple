"use strict";
//fibonacci
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be non-negative number");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let first = 0;
    let second = 1;
    let nthNumber = 0;
    for (let i = 2; i <= n; i++) {
        nthNumber = first + second;
        first = second;
        second = nthNumber;
    }
    return second;
}
console.log(fibonacci(12));
