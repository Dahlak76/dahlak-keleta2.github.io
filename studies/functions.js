/**functions:
 * 1. A function is similar to a procedure—a set of statements that performs a task or calculates a value
 *    for a procedure to qualify as a function
 * 2. it should also take some input and return an output where there is some obvious relationship
 *    between the input and the output.
 * 3. To use a function, you must define it somewhere in the scope from which you wish to call it.
 *
 ***  A function definition (also called a function declaration, or function statement) consists of
 * a.  the function keyword, followed by:
 * b.  The name of the function.
 * c.  A list of parameters to the function, enclosed in parentheses and separated by commas.
 * -Function arguments are the values received by the function when it is invoked.
 * The code inside the function will execute when "something" invokes (calls) the function:
 * -When an event occurs (when a user clicks a button)
 * -When it is invoked (called) from JavaScript code
 * -Automatically (self invoked)
 *  -Inside the function, the arguments (the parameters) behave as local variables.
 *  -so when the function is first defined, the paarenthesis contain the parameters and can be as many as needed
 * d.  the code block with statements that define the function (that say what the function does), enclosed in curly brackets, { , , }.
 * Function Return
   //When JavaScript reaches a return statement, the function will stop executing.
   //If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
 
 Example of a function declaration...
Calculate the product of two numbers, and return the result:

let x = myFunction(4, 3);   // Function is called, return value will end up in x
 
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
// => x = 12
 
Functions often compute a return value. The return value is "returned" back to the "caller":
 *     ...For example, the following code defines a simple function named square
 */
function square(number) {
    return number * number;
  }
  /**  ^^^^^^^^^^^^^^^^^^^
   * The function named square takes one parameter, called number.
   * The function has one statement that says to
   * return the parameter of the function (number) multiplied by itself.
   * The statement return specifies the value returned by the function:
   */
  // arrow funtion is a shorter syntax for a function expression
  var doubler = (num) => {
    num * 2;
  };
 
  //doubler is the name of the function, num is the parameter, the function keyword is removed and replaced with =>
  //then the curley bracket for your code block with num multiplied by 2
 
  //if the function has only one expression, you can omit the curly brackets and the return keyword
  //also if it only takes in one parameter, you can also omit the parenthesis and also put it on one line
 
  var doubler = num => num * 2;
  /**
   *  Defining it names the function and specifies what to do when the function is called.
   *  Calling the function actually performs the actions with the actions it supposed to do.  
   *  if you define the function square, you could call it as follows:
   */
   square(4); // 4 * 4 = 16 => result would be 16
   console.log(square(4)); // => prints 16
 
  /**
   * a function can be anonymous (without a function name); it does not have to have a name.
   * the function square could have been defined as:
   */
   const square = function(number) {
       return number * number
    }
   var x = square(4) // x gets the value 16
   /**
    * Function expressions are also good when passing a function as an argument to another function.
    * The next example shows a map function that receives a function as first argument and an array as second argument
    */
    function map(func, array) {
        let result = []; // Create a new Array
        for (var i = 0; i <= array.length; i++) // itterate through the passed in array with a for loop
          result.push(array[i]); // each index value at each itteration gets pushed into the new result array
        return result;
      }
      // function expression example..
      var add = function(x,y){   //the add function is contained and named in this variable. it takes 2 parameters (x & y) as placeholders
        return x + y;            //in the code block it returns the sum of the 2 parameters
      };
      add(2,4);                   //this is a function call with the arguments (2 & 4) that are the requirements for the (x & y) parameters
                                  // the ( 2 & 4) are called arguments and are passed like this reperesenting the parameters given earlier

     // function declaration example... very similar to the above declaration except its not contained in a variable but the parameters, code block and function call is the same
      function add(x, y){
        return x + y;
      }                                  
      add(2,4);

      /**scopes and closure
       * scope: The current context of execution. The context in which values and expressions are "visible"
       * or can be referenced. If a variable or other expression is not "in the current scope,"
       * then it is unavailable for use. Scopes can also be layered in a hierarchy,
       * so that child scopes have access to parent scopes, but not vice versa.
       *
       * closure: A function serves as a closure in JavaScript, and thus creates a scope, so that
       * (for example) a variable defined exclusively within the function cannot be accessed from outside
       * the function or within other functions. For instance, the following is invalid:
       */
       function exampleFunction() {
        var x = "declared inside function";  // x can only be used in exampleFunction
        console.log("Inside function");
        console.log(x);
    }
   
    console.log(x);  // Causes error
 
    //However, the following code is valid due to the variable being declared outside the function, making it global:
 
    var x = "declared outside function";
 
exampleFunction();
 
function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}
 
console.log("Outside function");
console.log(x);


//closure example...

function makeFunc() {    // <= outer function
  var name = 'dahlak';
  function displayName() {  // <= inner function
    console.log(name);      // <= inner function accessing the outer functions variable
  }
  return displayName;       //return
}

var myFunc = makeFunc();   //declaring the function in a variable
myFunc();