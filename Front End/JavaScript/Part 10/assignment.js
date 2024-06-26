let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    btn.style.backgroundColor = `green`;
});

let inp=document.querySelector("input");

inp.addEventListener('change', function(){
    let h1 = document.querySelector('h1');
    h1.innerText = inp.value;
    console.log('Inp value = ',inp.value);
})