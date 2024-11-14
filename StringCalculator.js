
function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
  
    // Check if a custom delimiter is specified (starts with //)
    if (numbers.startsWith("//")) {
      // Extract the custom delimiter from the string (e.g., //;\n1;2)
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        // Escape the custom delimiter to use in a regular expression
        delimiter = new RegExp(delimiterMatch[1].replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&')); // Escape special chars
        // Remove the first line (delimiter definition) and keep the rest
        numbers = numbers.split("\n").slice(1).join("\n");
      }
    }
  
    // Split the numbers based on the custom delimiter
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  

    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  
  
  