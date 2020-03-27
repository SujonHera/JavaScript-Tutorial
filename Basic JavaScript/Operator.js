// Arithmetic Operator

// +, -, *, /, %

var a = 11
var b = 3
console.log(a % b);

/**Increment and decrement
 * Increment: Preincrement and postincrement
 *             ++a, a++ == a + 1;
 * Decrement: Predecrement and postdecrement
 *             --a, a-- == a - 1;
 */ 

 var a = 12;
  ++a; // 13
  a++ // 13
  a  // 14
  a++ // 14 
  a   // 15

  --a // 14
  a-- // 14
  a // 13

// Assignment Operator: +=, -=, /=, *=, %=
var a = 10;
var b = 32;
// a = a + b;
// console.log(a); // 42
a += b;
console.log(a);// 42

/** Relational Operator 
 * ==, >, <, >=, <=, !=
*/

 a = 13;
 b = 15;

console.log(a>b);// false
console.log(a < b);// true
console.log(a == b);// false
console.log(a >= b);// false
console.log(a <= b);// true
console.log(a != b);// true


// Logical Operator

// &&, ||, !

if(a > b || a<b){
    console.log("work");// work  
}else{
    console.log("not work");
    
}

if(a > b && a < b){
    console.log('work');  
}else{
    console.log("not work");// not work
    
}

// Bitwise Operator
// Ternary Operator



