class Problem {

    /**
     * Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. 
     * If so, return the string true, otherwise return the string false. 
     * 
     * For example: if num is 4602225 your program should return the string false because 5 is not an even number.
     */
    simpleEvens(num) {
        // Convert num to a string.
        // Declare a variable and set it to num.split() passing in empty quotes.
        // Loop through every character in the array.
        // Use a comparison to check if the character i modulo 2 is not equal to 2.
        // You don't need to use parseInt() because Javascript is Javascript.
        // If not, return false.
        // If we reach the end of the loop, return true, because every number is even.

        let numArr = num.toString().split("");
        for (let n of numArr) {
            if (n % 2 != 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
     * and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return 
     * the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program 
     * should return false as well.
     * 
     * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, 
     * and 3 question marks between 5 and 5 at the end of the string.
     */
    questionsMarks(str) {
        str = str.replace(/[^?\d]/g, "");               // Get rid of anything that isn't a question mark or number.
        let matches = str.match(/\d\?{3}\d/g);          // Search for pattern (d???d).
        if (matches === null) return false;             // If no pattern is found, matches is null. Return false.

        for (let match of matches) {
            let firstNum = parseInt(match[0]);
            let lastNum = parseInt(match[match.length - 1]);
            if (firstNum + lastNum !== 10) {            // If any two numbers in match don't equal 10, return false.
                return false;
            }
        }
        return true;                                    // If code made it this far, first and last number equals 10 for every match.
    }

    /**
     * Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format where each 
     * word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some 
     * combination of delimiter punctuation characters separating each word.
     * 
     * For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.
     */
    snakeCase(str) {
        // Use .toLowerCase to make str all lower case letters.
        // Split str by anything that isn't a letter, and store it in a string array.
        // Join the array by putting _ between every value and return the result.

        str = str.toLowerCase();
        let strArr = str.split(/[^a-z]/gi);
        return strArr.join("_");
    }

    /**
     * Have the function GCF(arr) take the array of numbers stored in arr which will always contain only 
     * two positive integers, and return the greatest common factor of them. 
     * 
     * For example: if arr is [45, 12] then your program should return 3. 
     * There will always be two elements in the array and they will be positive integers.
     */
    gcf(arr) {
        // Initialize a variable gcf and set it to -1.
        // Get the lowest number in arr.
        // Create a for-loop, starting at 1 and going up to that lowest number.
        // Use modulo to check if i goes into arr[0] and arr[1] perfectly.
        // If so, set gcf to i.
        // When loop finished, return gcf.

        let gcf = -1;
        const lowerNumber = this.getLowerNum(arr[0], arr[1]);
        for (let i = 1; i <= lowerNumber; i++) {
            if (arr[0] % i === 0 && arr[1] % i === 0) {
                gcf = i;
            }
        }
        return gcf;
    }

    getLowerNum(a, b) {
        if (a < b)
            return a;
        return b;
    }
}

module.exports = Problem;