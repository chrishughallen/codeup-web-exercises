"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


    function numberAsk(){

        var ans = confirm ("Would you like to enter a number?");

        if (ans == true) {
            var num = parseFloat(prompt('Enter a number'));

            if (num === '' || isNaN(num)) {
                alert('That isn\'t a number');
            }
            else if (!isNaN(num)) {
                if (num % 2 === 0) {
                    alert(num + ' is an even number');

                    if (num % 2 !== 0) {
                        alert(num + ' is an odd number.');
                    }

                    alert(num + ' + 100 is ' + (num + 100));

                    if (num > 0) {
                        alert(num + ' is a positive number')
                    }
                }
                else {
                    alert(num + ' is a negative number.');
                }
            }

        }

    }


    numberAsk();




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

//
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color){
    if (color === 'red'){
        return('Red is the color of blood');
    }
    else if (color === 'orange'){
        return('Orange is the color of an orange');
    }
    else if (color === 'yellow'){
        return('Yellow is the color of a banana');
    }
    else if (color === 'green'){
        return('Green is the color of grass');
    }
    else if (color === 'blue'){
        return('Blue is the color of the sky');
    }
    else if (color === 'indigo'){
        return('I don\'t know anything that is Indigo colored');
    }
    else if (color === 'violet'){
        return('Violet is the color of violets');
    }

}

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));








/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color){

    switch(color){
    case 'red':
        return('Red is the color of blood');
        break;

    case 'orange':
        return('Orange is the color of an orange');
        break;

    case 'yellow':
        return('Yellow is the color of a banana');
        break;

    case 'green':
        return('Green is the color of grass');
        break;

    case 'blue':
        return('Blue is the color of the sky');
        break;

    case 'indigo':
        return('I don\'t know anything that is Indigo colored');
        break;

        default:
        return('Violet is the color of violets');
        break;
    }

}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var newColor = prompt ('Enter a color!');
alert (analyzeColor(newColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (luckyNumber, totalAmount){

    if (luckyNumber === 0){
        return totalAmount;
    }
    else if (luckyNumber === 1){
       var discount = totalAmount * .1
        return totalAmount - discount;
    }
    else if (luckyNumber === 2){
        var discount = totalAmount * .25
        return totalAmount - discount;
    }
    else if (luckyNumber === 3){
        var discount = totalAmount * .35
        return totalAmount - discount;
    }
    else if (luckyNumber === 4){
        var discount = totalAmount * .50
        return totalAmount - discount;
    }
    else if (luckyNumber === 5){
        return totalAmount * 0;
    }

    else {
        return totalAmount;
    }

}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt ('What was the total of your bill?');

alert ('Your lucky number is ' + luckyNumber + '. That brings your total of $' + totalBill + ' to $' +
     calculateTotal(luckyNumber,totalBill));


















//************BONUSES****************





//
// Write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
//     Otherwise, it should return false.
//
//     Example: dayOfTheWeekStartsWithT("Monday")     => returns false
// Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
// Example: dayOfTheWeekStartsWithT("Tommy")     => returns false


function dayOfTheWeekStartsWithT(input) {

    input = input.toLowerCase();
    return input == 'tuesday' || input == 'thursday'
}



// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
//
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards


function isValidPassword (password) {

    var has6characters = isSixCharacters(password);

    var containsOneLetter = containsLetter(password);

    var containsOneNumber = containsNumber(password);

    var containsUppercase = containsUpper(password);

    var containsLowercase = containsLower(password);

    var lettersAndNumbersOnly = onlyLettersAndNumbers(password);

    var isNotPalindrome = notPalindrome(password);

    if (has6characters == false){
        return 'Password must be 6 characters'
    }
    else if (containsOneLetter == false){
        return 'Password must contain a letter'
    }
    else if (containsOneNumber == false){
        return 'Password must contain a number'
    }
    else if (containsUppercase == false){
        return 'Password must contain one uppercase letter'
    }
    else if (containsLowercase == false){
        return 'Password must contain one lowercase letter'
    }
    else if (lettersAndNumbersOnly == true){
        return 'Password must contain letters and numbers only'
    }
    else if (isNotPalindrome == false){
        return 'Password cannot be a palindrome'
    }

    else {
        return "Password is valid"
    }


}


    function isSixCharacters (password) {
        return password.length === 6;
    }

    function containsUpper (password) {
    return password !== password.toLowerCase()
    }

    function containsLower(password) {
    return password !== password.toUpperCase()
    }

    function containsNumber(password) {
    return password.includes(0) || password.includes(1) || password.includes(2) ||
            password.includes(3) || password.includes(4) || password.includes(5) ||
            password.includes(6) || password.includes(7) || password.includes(8) ||
            password.includes(9) || password.includes(0);

    }

    function containsLetter(password) {
    password = password.toLowerCase(password);
    return password.includes('a') || password.includes('b') || password.includes('c') ||
        password.includes('d') || password.includes('e') || password.includes('f') ||
        password.includes('g') || password.includes('h') || password.includes('i') ||
        password.includes('j') || password.includes('k') || password.includes('l') ||
        password.includes('m') || password.includes('n') || password.includes('o') ||
        password.includes('p') || password.includes('q') || password.includes('r') ||
        password.includes('s') || password.includes('t') || password.includes('u') ||
        password.includes('v') || password.includes('w') || password.includes('x') ||
        password.includes('y') || password.includes('z')
    }

        function notPalindrome(password){
        return password !== password.split('').reverse().join('')
    }

    function onlyLettersAndNumbers(password){
    return password.includes('!') || password.includes('@') || password.includes('#') || password.includes('$') ||
        password.includes('%') || password.includes('^') || password.includes('&') || password.includes('*') ||
        password.includes('(') || password.includes(')') || password.includes('-') || password.includes('_') ||
        password.includes('+') || password.includes('=');
}




var input = prompt('Please enter a password');

while (isValidPassword(input) === false){
    input = prompt('Please enter a valid password');
}
alert ('Your password is valid')






