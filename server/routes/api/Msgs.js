const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Messages
router.get("/", async(req, res) => {
    const Msgs = await loadMsgCollection();
    res.send(await Msgs.find({}).toArray());
});

// Add Messages
router.post("/", async(req, res) => {
    const Msgs = await loadMsgCollection();
    await Msgs.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    res.status(201).send();
});

// Delete Messages
router.delete("/:id", async(req, res) => {
    const Msgs = await loadMsgCollection();
    await Msgs.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

// DB connection
async function loadMsgCollection() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://guestbook:guestbook@cluster0.ntzkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        }
    );

    return client.db("guestbook").collection("Msgs");
}

// sign up function

module.exports = router;