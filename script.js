function decimalToBinary(decimal) {
  // Base case: if the decimal number is 0, return '0'
  if (decimal === 0) {
    return '0';
  }

  let binary = ''; // Variable to store the binary representation

  // Convert decimal to binary
  while (decimal > 0) {
    // Get the remainder when dividing by 2 (either 0 or 1)
    const remainder = decimal % 2;
    // Add the remainder to the binary representation
    binary = remainder + binary;
    // Integer division by 2 to move to the next bit
    decimal = Math.floor(decimal / 2);
  } 
  return binary;
} 

const decimalinput=parseint(prompt("Enter a decimal number:"));
const binryOutput=decimalToBinary(decimalinput);
console.log("Binary equivalent:",binaryOutput); 