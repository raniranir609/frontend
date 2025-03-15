function addSum(){
    let s = 0
    for (let i = 1;i<=100000;i++){
      s+= i
  }
   return s
}

let start = performance.now();
let sum = addSum();
let end = performance.now();

console.log(end-start)