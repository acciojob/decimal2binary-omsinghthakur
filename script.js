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

// Example usage:
const decimalNumber = 10;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber); // Output: 1010
