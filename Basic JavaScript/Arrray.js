let friends = ['Rakib','Niloy','Shibbir','Shuvo','Nahid']

 friends = new Array('Rakib','Niloy','Shibbir','Shuvo','Nahid')  // two ways
  
 friends[0] = 'Shakib' 

 let names = ['Jubel Ahmed','Rita Hossain','Sujon Hossain', 'Sharlina Hossain']
 console.log(names.indexOf('Sujon Hossain'));
  let name = names.slice(1,3)
  
  console.log(name);
  
  console.log(names.splice(3, 1))
 // reduce, keys, values, 

 for (let i = 0; i < friends.length; i++) {
     console.log(friends[i]);
 }
 console.log(friends.length)
 console.log(friends.toString());
 console.log(friends.join('* '));
 console.log(friends.lastIndexOf('Niloy'));
 console.log(friends.slice(2,4));
 console.log(friends.map(pd => pd));
 let mapValue = friends.map(fd => fd)
 
 console.log(mapValue);
 console.log(mapValue.reverse());

  console.log(friends.shift()); // remove first value
  console.log(friends);
  console.log(friends.concat('Habib')); // add value in last element
  

  let number = [1, 2, 3, 4, 5]

 total = number.reduce((a, b) => a + b);
 console.log(total);
 
  
  let initialValue = 0;

  let sum = [
      {x: 1},
      {x: 2},
      {x: 3}
  ]
  
  let objectSum = sum.reduce((previousValue, currentValue) => previousValue + currentValue.x, initialValue)
 
 console.log(objectSum);
 
 let allArray = number.concat(friends)
 console.log(allArray);
 
 let someNumber = [23, 2, 1, 4, 5, 7, 34, 64, 45]

console.log(someNumber.sort((a, b) => a - b)); // Ascending Order
console.log(someNumber.sort((a,b) => b - a)); // descending Order

 
  