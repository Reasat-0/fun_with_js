

let status = true;

console.log("TASK 1");

const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if(status){
            resolve("Task --- 2")
        }
        else{
            reject("Failed....")
        }
    },2000)
})

promise
    .then( (res) => {
        console.log(res)
    })
    .catch( (err) => {
        console.log(err)
    })


// setTimeout( () => {
//     console.log("Hello")
// })