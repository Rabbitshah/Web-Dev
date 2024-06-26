// Practice Questions
// Qs1.
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
            if(arr[i]>num){
                console.log(arr[i]);
            }
        }
    }
getElements(arr,num);

// Qs2.
let str="abcdabcdefgggh";

function getUnique(str){
    let ans =" ";
        for (let i=0; i < str.length; i++) {
            let currChar = str[i];

            if (ans.indexOf (currChar)==-1){
                ans += currChar;
            }  
        } 
    return ans; 
}

// Qs3.
let country = ["Australia","Germany","United States of America"];

function longestName(country){
    let ansIdx=0;
    for(let i = 0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return ansIdx;
}

longestName(country);

// Qs4.
let str1 = "apnacollege";

function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
            count++;
        }
    }
    return count;
}

countVowels(str1);

// Qs5.
let start = 10;
let end = 20;

function genrateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff) + start+1;
}

console.log(genrateRandom(start,end));