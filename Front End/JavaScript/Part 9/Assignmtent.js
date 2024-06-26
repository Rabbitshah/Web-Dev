//Q1
let button = document.createElement('button');
button.innerText= "Click Me";
button.classList.add("btnStyle")

let input = document.createElement('input');
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Q2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//Q3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Q4
let h1 = document.createElement("h1");
h1.innerHTML= "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1Style");

//Q5
let para1 = document.createElement('p');
para1.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para1);