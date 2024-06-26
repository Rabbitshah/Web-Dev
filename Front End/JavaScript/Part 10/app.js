// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     console.log("Clicked");
// };

// function sayHello(){
//     alert("Hello");
// }

// btn.onclick = sayHello;


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("code = ", event.code);
//     if(event.code == "KeyU"){
//         console.log("Character moves up");
//     }
//     else if(event.code == "KeyD"){
//         console.log("Character moves down");
//     }
//     else if(event.code == "KeyL"){
//         console.log("Character moves left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("Character moves right");
//     }

// });

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});