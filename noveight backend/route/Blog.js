let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let blog = express.Router().post('/create', (req, res) => {
    client.connect("mongodb://localhost:27017/Sciastra", (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection("Blog").findOne({ "title": req.body.title }, (err, result) => {
                if (err) {
                    throw err;
                }
                if (result) {
                    res.send("BLOG POST WITH THIS TITLE ALREADY EXISTS!!");
                } else {
                    db.collection("Blog").insertOne(req.body, (err, result) => {
                        if (err) {
                            throw err;
                        } else {
                            res.send("BLOG POST SUCCESSFULLY CREATED");
                        }
                    });
                }
            });
        }
    });
});

module.exports = blog;
