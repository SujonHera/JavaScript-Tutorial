/**
 * Loop: Entry Control loop and Exit Control 
 * Entry Control Loop : For Loop and While loop
 * Exit Control loop : do-while loop
 */
let sum = 0;
 for(let i = 0; i < 100; i++){
   sum += i;
 }
 console.log(sum);
let i = 0;
 while(i < 1000){
     sum = sum + i;
     i++;
 }
 console.log(sum);
let j = 0;
 do {
     console.log(" " + j)
     j++;
 } while (j < 10);

 