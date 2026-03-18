//3- Understanding Scooping in JS- (var , let, global)
let genderType = "female"
function printGender(){
    let color = "brown"
    if (genderType.startsWith("female")){
        var age = 30
        let color = "pink"
        console.log("The color inside the if block is: ", color)
    }
    console.log("The value of age outside if block but inside function is: ", age)
    console.log("The value of color outside if block but inside function is: ", color)
}
printGender()
console.log("The value of genderType globally is : ",genderType)


//changing genderType to "male"

// let genderType = "male"
// function printGender(){
//     let color = "brown"
//     if (genderType.startsWith("female")){
//         var age = 30
//         let color = "pink"
//         console.log("The color inside the if block is: ", color)
//     }
//     console.log("The value of age outside if block but inside function is: ", age)
//     console.log("The value of color outside if block but inside function is: ", color)
// }
// printGender()
// console.log("The value of genderType globally is : ",genderType)
