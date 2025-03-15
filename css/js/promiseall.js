let Promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve("First"),1000);
})
let Promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve("second"),2000);
})
let Promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject("thrid"),3000);
})

/*Promise.all([Promise1,Promise2,Promise3])
.then((value)=>{ console.log(value)})
.catch((error)=>{console.log(error)})*/

/*Promise.allSettled([Promise1,Promise2,Promise3])
.then((value)=>{ console.log(value)})
.catch((error)=>{console.log(error)})

Promise.any([Promise1,Promise2,Promise3])
.then((value)=>{ console.log(value)})
.catch((error)=>{console.log(error)})*/

Promise.race([Promise1,Promise2,Promise3])
.then((value)=>{ console.log(value)})
.catch((error)=>{console.log(error)})
