const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successfull")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userSchema = new Schema({
  useraname : String,
  email: String,
});

const postSchema = new Schema({
    content : String,
    likes: Number,
    user:{
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  });

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async() => {
  let result = await Post.findOne({}).populate("user","username");
  console.log(result);
}

getData();  

