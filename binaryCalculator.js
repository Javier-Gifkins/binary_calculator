// const choice = prompt("Type 'bin' to convert binary to decimal. Type 'dec' to convert decimal to binary");
// const input = prompt("Enter you Number: ");

// if (choice === "bin") {
//     let decimal = parseInt(input, 2);
//     console.log(`${choice} in Decimal form is ${decimal}.`)
    
// } else if (choice = "dec") {
//     let binary = Number(input).toString(2);
//     console.log(`${choice} in Binary form is ${binary}.`)

// } else {
//     console.log("Invalid Choice.")
// }

// console.log("Hello, world!");

// ES5

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type 'bin' to convert binary to decimal. Type 'dec' to convert decimal to binary: ", function(choice) {
    rl.question("Enter your number: ", function(input) {
        if (choice === "bin") {
            var decimal = parseInt(input, 2);
            console.log("Binary in Decimal form is " + decimal + ".");
        } else if (choice === "dec") {
            var binary = Number(input).toString(2);
            console.log("Decimal in Binary form is " + binary + ".");
        } else {
            console.log("Invalid Choice.");
        }
        rl.close();
    });
});

