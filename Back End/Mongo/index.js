const mongoose = require('mongoose');

main().then(() => {
    console.log("successful");
})
.catch((err) => 
    {console.log(err);

});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// User.findByIdAndUpdate('665184b4758008e5884ee7fe',{age: 50},{new: true})
// .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => 
//         {
//             console.log(err);
//     });

// User.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => 
//     {console.log(err);

// });


// User.insertMany([
//     {name:"Tony",email:"tony@yahoo.in",age:50},
//     {name:"Peter",email:"Peter@yahoo.in",age:30},
//     {name:"Bruce",email:"Bruce@yahoo.in",age:40}
// ]);

// const user2 = new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48
// });

// user2.save();