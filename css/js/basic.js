const myPromise = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    resolve("hello this is resolved")
  },2000)
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