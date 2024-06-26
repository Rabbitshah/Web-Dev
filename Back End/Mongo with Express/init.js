const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(() => {
    console.log("successful");
})
.catch((err) => 
    {console.log(err);

});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

let allChats = [
    {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheet",
    created_at: new Date()
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"when is the exam",
        created_at: new Date()
    },
    {
        from:"amit",
        to:"sumit",
        msg:"all the best",
        created_at: new Date()
    },    
    {
        from:"anita",
        to:"ramesh",
        msg:"teach me callbacks",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);

