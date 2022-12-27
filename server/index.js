const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
const dotenv = require("dotenv");

// relie le .env
dotenv.config();

// permet de recevoir de la data du back vers le front
app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect(process.env.PORT, {
    useNewUrlParser: true,
});
// ADD NEW DATA
app.post("/addFriend", async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const Friend = new FriendModel({
        name: name,
        age: age,
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
// UPDATE
app.put("/update", async (req, res) => {
    const newAge = req.body.newAge;
    const id = req.body.id;

    try {
        await FriendModel.findById(id, (error, friendToUpdate) => {
            friendToUpdate.age = Number(newAge);
            friendToUpdate.save();
        });
    } catch (error) {
        console.log(error.message);
    }
    res.send("updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    await FriendModel.findByIdAndRemove(id).exec();
    res.send("item deleted");
});

app.listen(3001, () => {
    console.log("Server runs on 3001");
});
