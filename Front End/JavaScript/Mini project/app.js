// Event bubbling
// let div = document.querySelector("div");
// let ul  = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log('Div was clicked ');
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation;
//     console.log('Ul was clicked ');
// });

// for (li of lis){
//     li.addEventListener("click", function(){
//         console.log('Li was clicked ');
//     });
// }

// Activity
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete');
    item.appendChild(delBtn)


    // console.log(inp.value);
    inp.value = "";

});

ul.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
    
})

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function() {
//         let par = this.parentElement;
//         par.remove;
//     });
// }

