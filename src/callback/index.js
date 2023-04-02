function sum( num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(2, 3, sum))

setTimeout(function() {
    console.log('Hi Javascript')
}, 2000)


function greeting(name){
    console.log(`Hi ${name}`)
}


setTimeout(greeting, 100000, 'Himura')