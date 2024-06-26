// Practice Questions
// Qs1.
let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i=0;i<arr.length; i++){
    if(arr[i] ==  num){
            arr.splice(i,1);
    }
}

console.log(arr);


// Qs2.
let number = 287152;
let count = 0;
let copy = number;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);


// Qs3.
let number1 = 287152;
let sum = 0;
let copy1 = number;
while(copy1>0){
    digit = copy1%10;
    sum+=digit;
    copy1 = Math.floor(copy1/10);
}

console.log(sum);


// Qs4.
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i; 
}

console.log(`factorail of ${n} is ${factorial}`);


// Qs5.
let arr2 = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i=0; i<=arr2.length; i++){
    if(largest<arr2[i]){
        largest=arr2[i];
    }
}

console.log(largest);