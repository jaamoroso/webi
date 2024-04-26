

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
    console.log("EVEN NUMBER:");
    if (arr[i] % 2 === 0) {
        console.log(evenNumbers[i]);
    }
}

for (let i = 1; i < arr.length; i + 2) {
    console.log("ODD NUMBER:");
    if (arr[i] % 1 === 0) {
        console.log(oddNumbers[i]);
    }
}
