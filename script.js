function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  const romanNumerals = Object.values(obj);
  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const [symbol, value] = romanNumerals[i];

    // Handle subtraction cases (e.g., 900 -> CM, 90 -> XC)
    if (i + 2 < romanNumerals.length) {
      const [nextSymbol, nextValue] = romanNumerals[i + 2];
      if (num >= value - nextValue) {
        result += nextSymbol + symbol;
        num -= value - nextValue;
        continue;
      }
    }

    // Add symbols for the current value
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
