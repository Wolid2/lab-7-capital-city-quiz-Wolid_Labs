// TOOO finish these lines to select the correct elements in the HTML page.

let randomCountryElement = document.querySelector('')     // The element to display the country's name in, currently has the text 'Country Placeholder'
let userAnswerElement = document.querySelector('')    // The input element the user enters their answer in  
let submitButton = document.querySelector('')
let resultTextElement = document.querySelector('')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array country names and two-letter country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files included with script elements as one big file,
// organized in the order of the script tags. So the countriesAndCodes array from countries.js
// is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes to solve this problem - just proving it is available 


// TODO when the page loads, select an element at random from the countriesAndCodes array

// TODO display the country's name in the randomCountryElement 

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * Read the text from the userAnswerElement 
//  * Create the URL you will need to make a request to. 
//     You will need with the two-letter country code to build the URL. 
//     These are in countriesAndCodes, example 'CN' or 'AF'
//  * Use fetch() to make a call to the World Bank API 
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare the actual capital city to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data. You can make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'


// TODO Create a Play Again button in the HTML. Connect the play again button. 
// When the Play Again button is clicked, clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess as described. 
// If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code again. 
