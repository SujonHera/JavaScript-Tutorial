const chokirTola = ['tShirt', "jeans", "juta", "boi","gamcha", "charger"]

for(let i = 0; i < chokirTola.length; i++){
    let jinish = chokirTola[i]
    if(jinish == 'charger'){
        console.log("charger paichi")
        break
    }
}


const khalarChelePaliyeGase = ["dhaka", "rajshahi", "rangpur", "pabna", "friendHouse"]

for (let i = 0; i < khalarChelePaliyeGase.length; i++) {
    const paichi = khalarChelePaliyeGase[i];

    if(paichi == 'friendHouse'){
        console.log("Khalar Chele friend House a")
    }
    
}

const index = khalarChelePaliyeGase.indexOf('pabna')

console.log("khalar chele ache " + index + " number list");