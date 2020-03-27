let friends = ['Rakib', 'Niloy', 'Shibbir', 'Shuvo', 'Nahid']

friends.forEach(function (name) {
    console.log(name);
    
})

// friends.forEach(print) // same thing

// function print(name) {
//     console.log(name);
// }

function operation(a,b,callBack) {
    var c = a + b;
    var d = a - b;
    callBack(c, d)
}
function print(c , d) {
    console.log(c , d);
    
}

function multiply (c, d){
   let num = c * d;
   console.log(num);
   
}

operation(2, 3, multiply)


function traverse(names, callBack){
    for(let i = 0; i < names.length; i++){
        callBack(names[i])
    }
}

traverse(friends, function(name) {
    console.log(name);  
})
