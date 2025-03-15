const myPromise = new Promise((resolve,reject)=>{
   const randomNUM = Math.random();
    if(randomNUM>0.5){
       resolve("Number greater")
    }else{
        reject("smaller")
    }
})
myPromise 
.then((value)=>{
    console.log(value)
    return "Hello new return"
})
.then(mess=>{
    console.log(mess)
})
.catch((error)=>{
    console.log(error)
})