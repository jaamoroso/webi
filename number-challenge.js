/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

//sum of 3 numbers
function sum(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log("Sum:", sum(22, 11, 36))

//difference of 2 numbers
function difference(num1, num2) {
    return num1 - num2
}
console.log("Difference:", difference(562, 142))

//product of 2 numbers
function product(num1, num2) {
    return num1 * num2
}
console.log("Product:", product(57, 53))

//average of 2 numbers
function average(num1, num2) {
    return (num1 + num2) / 2
}
console.log("Average:", average(50, 100))