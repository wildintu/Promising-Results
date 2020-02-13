// slowMath.add(6,2).then((e) => {
//     console.log(e);
//     return slowMath.multiply(e,2);
// }).then((e) => {
//     console.log(e);
//     return slowMath.divide(e,4);
// }).then((e) => {
//     console.log(e);
//     return slowMath.subtract(e,3);
// }).then((e) => {
//     console.log(e);
//     return slowMath.add(e,98);
// }).then((e) => {
//     console.log(e);
//     return slowMath.remainder(e,2);
// }).then ((e) => {
//     console.log(e);
//     return slowMath.multiply(e,50);
// }).then((e) => {
//     console.log(e);
//     return slowMath.remainder(e,40);
// }).then((e) => {
//     console.log(e);
//     return slowMath.add(e,32);
// }).then((e) => {
//     console.log(e);
//     return console.log(`The final result is ${e}.`);
// }).catch((e) => {
//     return console.log(e);
// })

let doMath = async function () {
    try {
        let result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(result);
        return console.log(`The final result is ${result}.`);

    } catch(error) {
        return console.log(error);
    }
}

doMath();