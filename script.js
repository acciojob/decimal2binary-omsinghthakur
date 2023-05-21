function decimalToBinary(decimal) {
  // Base case: if the decimal number is 0, return '0'
  if (decimal === 0) {
    return '0';
  }   
  let binary = ''; 
  while (decimal > 0) {
    binary = (decimal % 2)+binary; 
    decimal = Math.floor(decimal / 2);
  }  
  return binary; 
}   
const decimalinput=parseInt(prompt("Enter a decimal number:")); 
const binaryOutput=decimalToBinary(decimalinput);
console.log("Binary equivalent:",binaryOutput);  