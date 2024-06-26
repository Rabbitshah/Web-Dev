// Practice Questions
// Qs1.
let arr=[7,9,0,-2];
console.log("Before " + arr);
let n=3;
let arr1=arr.slice(0,n);
console.log("After " + arr1);


// Qs2.
let arr2=[7,9,0,-2];
console.log("Before " + arr2);
let arr3=arr.reverse().slice(0,n);
console.log("After " + arr3.reverse());


// Qs3.
let str='';
if(str==0){
    console.log("String is blank");
}else{
    console.log("String is not blank");
}


// Qs4.
let str1 = "ApNaCoLlEgE";
let idx=3;
if(str1[idx]==str1[idx].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not lowercase");
}


// Qs5.
let str3 = prompt("please enter a string");
console.log(`original string=${str3}`); 
console.log(`string without spaces=${str3.trim()}`);


// Qs6.
let arr4=["hello",'a',23,64,99,-6];
let item=64;
if(arr4.indexOf(item)!=-1){
    console.log("element exists in array");
}
else{
    console.log("element doesn't exist in array");
}
