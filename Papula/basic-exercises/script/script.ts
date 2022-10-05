// Exercise 1

// let num: number = 0;

// for(let i=0; i <=10; i++){
//     let result  = num * i;
//     console.log(`${num} x ${i} = ${result}`);
// }


// for(let i = 0; i <=10; i++){
//     console.log(`-------------------`)    
//     console.log(`started block ${i}`)    
//     console.log(`-------------------`)
//     for(let k = 0; k <= 10; k++){
//         let result = i * k;
//         console.log(`${i} x ${k} = ${result}`);
//         // console.log("-----------")
//     }
//     console.log(`-------------------`)    
//     console.log(`completed block ${i}`)    
//     console.log(`-------------------`)    
// }

// Exercise 2

let names = {fname: "Manuel", lname: "Papula"}

let nameArray = Object.values(names)

document.write(`${names.fname} ${names.lname} <br><br>`)

for(let i=0; i<=10;i++){
    document.write(`${nameArray[0]} ${i} <br>`)
}

let test: () => void = function(){
    for(let i=0; i<=10;i++){
        setTimeout(() =>  {
            console.log(`${nameArray[1]} ${i}`)
        },5000);
    }    
}
test()

// Exercise 3







