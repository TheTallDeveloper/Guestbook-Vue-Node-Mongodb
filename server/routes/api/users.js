const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async(req, res) => {
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray());
});

// Add post
router.post('/', async(req, res) => {
    const users = await loadUserCollection();
    await users.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});


// Delete Post
router.delete('/:id', async(req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})

// DB connection
async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://guestbook:guestbook@cluster0.ntzkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    });

    return client.db('guestbook').collection('users');
}


// sign up function



module.exports = router;