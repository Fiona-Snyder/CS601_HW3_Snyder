function jsCalculator() {

  // Welcome the visitor with an alert.
  alert("Hello and welcome to visit!");

  // Prompt the visitor for his/her name.
  function greetUser() {
    let name = prompt("What is your name?");
    //Display the name with an alert, and convert the visitor's name to upper case.
    alert("Welcome " + name.toUpperCase() + " !");
  }

  // function call
  greetUser();

  //Create a function to add the two visitor-entered numbers.
  function add(num1, num2) {
    return num1 + num2;
  }

  // Add a loop to repeat steps 4-7 if the visitor choose to, otherwise end the program.
  let num1;
  let num2;
  let answer;
  do {

    // Create a loop to re-prompt the visitor for real numbers, until both user-entries are indeed numbers.
    do {
      // Prompt the visitor to enter two numbers.
      num1 = Number(prompt("Please enter your first number:"));
      num2 = Number(prompt("Please enter your second number:"));

      // Check whether what the visitor entered is indeed numbers.  
      // Prompt the visitor to enter a real number, if either or both entries is not a number.      
      if ((Number.isNaN(num1)) || (Number.isNaN(num2))) {
        alert("Please enter a real number!");
      } 
    } while ((Number.isNaN(num1)) || (Number.isNaN(num2))); // end 1st inner do-while loop

    // Return the result to the visitor with an alert, after function call.
    let result = add(num1, num2);
    alert("The sum of your two numbers is: " + result);

    // Add a conditional logic, based on the result of adding the two numbers together.
    if (result > 10) {
      alert("That is a big number.");
    } else {
      alert("That is a small number.");
    } // end if/else statement

    // Create a loop to re-prompt the visitor to enter either 'yes' or 'no' when needed.
    do {
      // Ask the visitor whether they want to continue the program.
      answer = prompt("Do you want to add two numbers again? (Please enter 'yes' or 'no'.)");

      // Check whether the visitor entered either 'yes' or 'no'.
      // Prompt the visitor to enter either 'yes' or 'no', if it is not.
      if ((answer.toLowerCase() !== "yes") && (answer.toLowerCase() !== "no")) {
        alert("Please enter either 'yes' or 'no'!");
      }
    } while ((answer.toLowerCase() !== "yes") && (answer.toLowerCase() !== "no")); // end 2nd inner do-while loop

    // Display a message based on the visitor's answer to the question.  
    if (answer.toLowerCase() === "yes") {
      alert("Please enter two numbers again.");
    } else if (answer.toLowerCase() === "no") {
      alert("Thank you for using the program!");
    } // end if/else-if statement

  } while (answer.toLowerCase() === "yes"); // end outer do-while loop

}