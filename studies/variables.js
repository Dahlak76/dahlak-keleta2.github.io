/** variables:
    * 1. are a container of data that can be assigned or left unassigned at time of declaration.
    * 2. they are named identifiers bound to a section of our code called a scope.
    * 3. called variables because unlike constants, variables can be reassigned another value.
    * 4. they can be strings, number or boolean.
    * 5. they can be contain primitave values like bool, number or strings.
    * 6. they also can contain complex value like an array, object or function.
    * 7. they either store simple data (no more that 8 bytes) like bool, num or string or
    *    point to a location in memory where weve stored a complex value like object, array or function.
    * 8. there are 3 ways to declare a variable. var, let and const.
    *
    * --var has global scope, meaning it can be accessed throughout the whole code. inside and outside the code block
    * --var can also be reassigned and given new value
    * --var can also be hoisted, meaning that when var is declared within a code it get hoisted to the top of the code.
    * --Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
    * (script or function).Be carefull that only declaration gets hoisted NOT the initialitations.
    *  Basically, it gives us an advantage that no matter where functions and variables are declared,
    *  they are moved to the top of their scope regardless of whether their scope is global or local.
    *  hoisting works for var, let and const.
    *
    * --let can also be reassigned just like var. let allows you to declare variables but are limited to the scope of a
    * --block statement, or expression on which it is used. meaning that it only has access to code that is a child of it or parent
    *
    * --const is very similar as let in that it is also block scoped and cannotbe accessed outside the function or expression.
    * --unlike let, block cant chance through reassignment and cant be redeclared. it needs to be initialized when the variable
    * --is created and cant be declared
*/
// 1. declaration //
//      at the declaration phase, the variable myName is undefined because we havent initialized it to anything
var myName;
console.log(myName); // prints undefined to the console
// 2. initialization is when you give it a value
myName = "dahlak";
console.log(myName); // prints "dahlak" to console
// 3. reassigning an already initialized variable
myName = "keleta";
console.log(nyName); //prints keleta to console