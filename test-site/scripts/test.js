//Change the H1 into Hello World
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//Declare let + name-of-variable
let myVariable;
myVariable = "Bob";

// or

let myVariable1 = "Bob";
myVariable1;

//Change the value 

let myVariable2 = "Bob";
myVariable2 = "Steve";

//Array
let myVariable3 = [1, 'Bob', 'Steve', 10];

//Object
let myVariable4 = document.querySelector('h1');

//Conditionals

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite...");
// }

//Functions
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

//Event
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
})