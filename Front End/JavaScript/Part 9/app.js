let para1 = document.createElement('p');
para1.innerText= "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red")

let h3 = document.createElement('h3');
h3.innerText= "I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue")

let div = document.createElement('div');
div.classList.add("div")

let h1 = document.createElement('h1');
h1.innerText= "I'm in a div";


let para2 = document.createElement('p');
para2.innerText= "ME TOO!";

div.append(h1)
div.append(para2)
document.querySelector("body").append(div);