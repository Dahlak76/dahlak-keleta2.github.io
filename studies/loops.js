/**loops:
 * 1. Loops offer a quick and easy way to do something repeatedly
 * 2. There are many different kinds of loops, but they all essentially
 *      do the same thing: they repeat an action some number of times
 * 3. A for loop repeats until a specified condition evaluates to false
 * 4.lets cover two of the more commonly used loops, a for loop and a for in loop
 */
 //a. The initializing expression initialExpression, if any, is executed.
 //     This expression usually initializes one or more loop counters, but the syntax allows
 //     an expression of any degree of complexity. This expression can also declare variables.
 //  *this is also considered the start coondition where the count or itteration will start
 //b. The conditionExpression expression is evaluated. If the value of conditionExpression is true,
 //     the loop statements execute. If the value of condition is false, the for loop terminates.
 //     (If the condition expression is omitted entirely, the condition is assumed to be true.)
 //  *this is the stop condition. as long as this statement is true, the loop will continue itterating.
 //c. The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
 //d. If present, the update expression incrementExpression is executed.
 //  *this is the part that tells the loop by what increment to count/loop
 //e. Control returns to Step 2.
 
 var nums = [1, 2, 3, 4, 5];
 for(var i = 0; i < nums.length; i++){ // i has been declared and starts the loop at 0 and continues to length of the array by increments of 1
    console.log(nums[i]);               // prints =>    1
 }                                      //              2
                                        //              3
                                        //              4
                                        //              5
//a for in loop is good for looping through objects and accessing keys and values
// two steps to define a for loop: how will you define the key and what object do you want to loop over
//  key reference and object
 for(var key in object){
    //code to run
}

// you can also use a for loop in reverse. the diffrence being that the start point will be the end of the array (.length - 1)
// and your stop will be 0 (or wherever you need it) and your incremintor will be i-- instead of ++

var num1 = [1, 2, 3, 4];
for(var i = num1.length - 1; i >= 0; i--){
   console.log(num1[i]);
}

/**
 * 
 * The while creates a loop that executes a specified statement as long as the test condition evaluates to true. 
 * The condition is evaluated before executing the statement.
 * An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. 
 * When condition evaluates to false, execution continues with the statement after the while loop.
 * 
 */
 let n = 0;

 while (n < 3) {
   n++;
 }
 
 console.log(n);
 // expected output: 3

 //The following while loop iterates as long as n is less than three.

 var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
/**
 * Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values:

After the first pass: n = 1 and x = 1
After the second pass: n = 2 and x = 3
After the third pass: n = 3 and x = 6
After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.
 * 
 */