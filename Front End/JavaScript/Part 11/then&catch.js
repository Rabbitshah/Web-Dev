function saveToDB(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("Success : data saved");
        }else{
            reject("Error: Unable to connect to the server");
        }
    });
}

saveToDB("apna college")
