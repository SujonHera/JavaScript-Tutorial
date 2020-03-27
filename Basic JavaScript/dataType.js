/* In Javascript have two data type
 1. Primitive Data type 
 2. Object Data type

 In Javascript there are 6 primitive data type: Primitive data type defined by javascript
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

var boolean = Boolean(false);
console.log(boolean);
var bln = false;
console.log(bln);

var nn = Number('45')
console.log(nn);

var num = 13.32
console.log(Number.parseInt(num));
console.log(Number.parseFloat(num));

// String in Javascript
var string = "Collection of some characters is called String";
console.log(string) // string
var str2 = 'String'
var str3 = `string`
var str4 = String("String")
var str5 = String(1235)
console.log(str5);

// Symbol in javascript

const mySymbol = Symbol()
Symbol() === Symbol() //false
console.log(Symbol()) //Symbol()
console.log(Symbol('Some Test')) //Symbol(Some Test)