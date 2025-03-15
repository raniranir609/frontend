function reverseString(str) {
    return str.split('').reverse().join('');
    }
     console.log(reverseString("hello"));   


 function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
    
   console.log(isPalindrome("racecar")); //  output: true
    console.log(isPalindrome("hello"));   //  output: false

 function findMax(arr) {
      return Math.max(...arr);
   }
    
    console.log(findMax([3, 1, 4, 1, 5, 9])); // output: 

 function findMax(arr) {
        if (arr.length === 0) {
            return undefined; 
        }
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    
        return max;
    }
    
    console.log(findMax([3, 1, 4, 1, 5, 9])); // output: 9

    function factorial(n) {
        if (n === 0) return 1; 
        return n * factorial(n - 1); 
    }
    console.log(factorial(5));
    
    function fibonacci(n) {
        let result = [0, 1];
        for (let i = 2; i < n; i++) {
            result.push(result[i - 1] + result[i - 2]);
        }
        return result.slice(0, n);
    }

 function secondLargest(arr) {
     if (arr.length < 2) return null; 
    
     let first = -Infinity, second = -Infinity;
    
     for (let num of arr) {
         if (num > first) {
           second = first;
             first = num;
         } else if (num > second && num < first) {
             second = num;
         }
      }
        return second === -Infinity ? null : second;
    }
    
    console.log(secondLargest([10, 20, 4, 45, 99])); // output: 45
    
    

function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1]; 
}

console.log(secondLargest([10, 20, 4, 45, 99])); 

function countOccurrences(str) {
    let occurrences = {};
    for (let char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    return occurrences;
}
console.log(countOccurrences("hello")); // output: { h: 1, e: 1, l: 2, o: 1 }



// 1.Find the output of the following code:
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2); // output: 112,32,02,112,NaN2,NaN


// 2 question
console.log(0.1 + 0.2 === 0.3); //output: false

//3 question
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //output: 456

//4 question
function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo()); //output: undefind

//5 question
console.log(sum(2)(3)(4)); // Expected output: 9

// 8 question
// number

// 9 question 
//  undefined
// 5


