/**
 * operators
 * operators act on our data, like assign them or compare them or include them in math operations
 * they are..
 */
 /* 1. assignment operators- =, +=, -=, *=, /=, %=, **=
 * = assigns the left operand to the right, all the others are compound assignment operators
 *   that are shorthand for the operations listed
 */
 x = y // => assigns the value of y to x
 x += y // => x = x + y
  
 /* 2. comparison operators- ===, !==, >=, <=, <, >
 * comparison operator compares its operands and returns a logical value based
 * on whether the comparison is true
 */
 1 === 1 // 1 is strictly equal to 1. => prints true
 2 !== 1 // 2 is not equal to 1. => prints true
 1 >= 2 // i is not grater than or equal to 2. => prints false
  
 /* 3. logical operators &&(both conditions have to be true) ||(only one of the conditions have to be true) !(not operator, used to find if something is not whats declared)
 * Logical operators are typically used with Boolean (logical) values; when they are, they return
 * a Boolean value. However, the && and || operators actually return the value of one of the specified operands
 */
 x = 1;
 y = 2;
 if(x === 1 || y === 3){
     return true;        // returns true because x = 1 even though y doesnt = 3
 }
  
 /* 4. arithmetic operators- +, -, *, /
 * An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value
 * you can also use them with an equal sign after each sign to return a result by that operator
 */
 1 + 1 // adds 1 to 1
 5 - 1 // subtracts 1 from 5
 2 * 2 // multiplys 2 by 2
 10 / 2 // divides 10 by 2
 2 += 2 // adds 2 to 2 => 4
 6 /= 2 // divides 6 by 2 => 3

  
 /**
  *  5. unarary operators- A unary operation is an operation with only one operand.
  *  -- The unary plus operator (+) precedes its operand and evaluates to its operand but
  *     attempts to convert it into a number, if it isn't already.
  */
  const x = 1;
  const y = -1;
  
  console.log(+x);
  // expected output: 1
  
  console.log(+y);
  // expected output: -1
  
  /**
   *  6. ternary operator-is the only JavaScript operator that takes three operands.
   *     The operator can have one of two values based on a condition. The syntax is:
   *
   *     condition ? val1 : val2
   *     If condition is true, the operator has the value of val1. Otherwise it has the value of val2.
   *     You can use the conditional operator anywhere you would use a standard operator.
   */
   var status = (age >= 18) ? 'adult' : 'minor';
  
   //This statement assigns the value "adult" to the variable status if age is eighteen or more.
   //Otherwise, it assigns the value "minor" to status.
 