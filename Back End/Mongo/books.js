const mongoose = require('mongoose');

main().then(() => {
    console.log("successful");
})
.catch((err) => 
    {console.log(err);

});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author : {
        type: String
    },
    price : {
        type: Number
    },
});

const Book = mongoose.model("Book", bookSchema);