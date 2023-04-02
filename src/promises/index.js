const promise = new Promise(function(resolve, reject) {
    resolve('Hey!')
})


const cows = 14

const countCows = new Promise(function(resolve, reject) {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject(`There is no cows on the farm`)
    }
})


countCows
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log('Finally!!'))