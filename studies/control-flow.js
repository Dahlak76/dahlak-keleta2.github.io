/**control flow:
 * 1. Control flow is the order in which statements are executed in a program.
 * 2. The default control flow is for statements to be read and executed in order
 *      from left-to-right, top-to-bottom in the code.
 * 3. certain conditional statements, like if/else-if/else and switch statements, can alter the flow from its default path.
 */
// -Use if to specify a block of code to be executed, if a specified condition is true
// -Use else if to specify a new condition to test, if the first condition is false
// -Use else to specify a block of code to be executed, if all other conditions are false
// -the code will be executed at the first true condition that is met then will exit the code block immediatly after
// -Use switch to specify many alternative blocks of code to be executed
if (field==empty) {
    promptUser();
} else {
    submitForm();
}
//For example, the above excerpt might be inside a function that runs when the user clicks
//the Submit button for the form.
 
var x =1;
if(x === 1) {
    return true;  //returns true and code has compleated its task
}else{
    return false;
}
//in the above example, the flow stops at the first if condition and doesnt need to continue
//because the first condition has been met
 
// another example of if/else if/else is as follows
 
var timeOfDay = 21;
 
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";  // The result of greeting will be => Good evening
  }
  //timeOfDay var is 21 so the code will run through the first if statement and not hit any code because 21 is greater than 10
  //then it goes through the else if statement and also doesnt hit any code because 21 is still greater than 20
  //finally it reaches the else statement and runs the code because that is the only option left in the conditional and because
  //it is a true value
 
//
//   The switch statement is used to perform different actions based on different conditions.
 
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
 
  //This is how it works:
 
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
 
//The getDay() method returns the weekday as a number between 0 and 6.
 
//(Sunday=0, Monday=1, Tuesday=2 ..)
 
//This example uses the weekday number to calculate the weekday name:
 
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
 
