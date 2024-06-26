let gameSeq =[];
let userSeq =[];
let levelMax = [];

let btns = ["yellow","red","green","purple"];

let h2 = document.querySelector("h2");

let level = 0;
let started = false;

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 50);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function checkAns(idx){
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        levelUp();
    }
    }
    else{
        h2.innerHTML = `Game over!Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    levelMax.push(level);
    console.log(levelMax);
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    
}