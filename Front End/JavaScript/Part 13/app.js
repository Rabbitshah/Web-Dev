let btn = document.querySelector("button")

btn.addEventListener("click", async ()=> {
    let link = await getFacts();
    // console.log(fact);   
    let img = document.querySelector("#result");
    img.setAttribute("src" , link)
})


// let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("ERROR -  ", e);
        return "No image found";
    }
}

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("ERROR -  ", e);
//         return "No fact found";
//     }
// }
