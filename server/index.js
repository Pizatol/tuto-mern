const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
const dotenv = require('dotenv');

// relie le .env
dotenv.config();


// permet de recevoir de la data du back vers le front
app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect(
    process.env.PORT,
    {
        useNewUrlParser: true,
    }
);
// ADD NEW DATA
app.post("/addFriend", async (req, res) => {
    const namee = req.body.name;
    const agee = req.body.age;

    const Friend = new FriendModel({
        name: namee,
        age: agee,
    });
    await Friend.save();
    res.send("Success");
});
// READ DATA
app.get("/read", async (req, res) => {
    FriendModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server runs on 3001");
});

