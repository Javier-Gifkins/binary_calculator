const choice = prompt("Type 'bin' to convert binary to decimal. Type 'dec' to convert decimal to binary");
const input = prompt("Enter you Number: ");

if (choice === "bin") {
    let decimal = parseInt(input, 2);
    console.log(`${choice} in Decimal form is ${decimal}.`)
    
} else if (choice = "dec") {
    let binary = Number(input).toString(2);
    console.log(`${choice} in Binary form is ${binary}.`)
    
} else {
    console.log("Invalid Choice.")
}