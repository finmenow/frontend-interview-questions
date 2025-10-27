const promiseAll = (promises) => {

}

const promiseA = new Promise(resolve => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

const promiseB = new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
})

Promise.all([promiseA, promiseB]).then(console.log)
// promiseAll([promiseA, promiseB]).then(console.log)
