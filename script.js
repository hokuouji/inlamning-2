function add (num1, num2) {
    sum = num1 + num2;

    var result = sum; 

    return result;
}

console.log (add (3, 5)) // = 8



function subtract (num1, num2) {
    difference = num1 - num2;

    var result = difference;

    return result;
}

console.log (subtract (10, 5)) // = 5

function divide (num1, num2) {
    quotient = num1 / num2;

    var result = quotient;

    return result;
}

console.log (divide (10, 5) ) // = 2

function reverseString (string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log (reverseString ("Reverse me")) // = "em esreveR"

function palindrome(string) {
    var registry = /[^A-Za-z0-9]/;
    string = string.toLowerCase().replace(registry, '');
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log (palindrome("apa"));  // = true
   console.log (palindrome("nUrses RuN")) // = true
   console.log (palindrome("fisk")); // = false