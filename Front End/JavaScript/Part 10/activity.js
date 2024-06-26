let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.style.color = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let R =Math.floor(Math.random()*255);
    let G =Math.floor(Math.random()*255);
    let B =Math.floor(Math.random()*255);
    let color = `RGB(${R},${G},${B})`;
    return  color;
}