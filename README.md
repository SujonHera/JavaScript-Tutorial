# JavaScript-Tutorial
Basic JavaScript,  Functional JavaScript, Object oriented JavaScript, ES-6, JavaScript Behind The Scene.

## Basic Javascript 
___
In the Basic JavaScript We Learn **Variable**, **JavaScript Data type**,  **Operator**, **If-else**, **Loop**, **String**, **Array**, **Function**.

>### Variable:
```javascript
// Variable is data type that can change there value during program execution. we can defined a variable

// var variable_name = value; var is javascript keyword

var number = 20; // integer
var number2 = 132.253 // float number
var number2 = 1/0 // infinity

var name ="Light Code" // string

```

>### Javascript Data Type:
```javascript 
/* In Javascript have two data type
 1. Primitive Data type 
 2. Object Data type

 In Javascript there are 6 primitive data type
 * Boolean -- true or false
 * Null -- Have no value 
 * Undefined -- declared a variable but hasn't been given a value
 * Number -- Integer, float, Infinity etc
 * Symbol -- a unique value that no equal to any other value
*/

 var empty; 
 console.log(empty); // undefined  An empty value is classed undefined

 var value = null;
 console.log(typeof value);

 var string = "Collection of some characters is called String";
 console.log(string) // string

 var boolean =  Boolean(false);
 console.log(boolean);
 var bln = false;
 console.log(bln);

 // Symbol in javascript

 const mySymbol = Symbol()
 Symbol() === Symbol() //false
 console.log(Symbol()) //Symbol()
 console.log(Symbol('Some Test')) //Symbol(Some Test)

```