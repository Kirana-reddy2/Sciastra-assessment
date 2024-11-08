let express = require('express')
let mongodb = require('mongodb')
let client = mongodb.MongoClient;

let register = express.Router().post('/', (req, res) => {
    client.connect("mongodb://localhost:27017/Login", (err, db) => {
        if (err) {
            throw err
        } else {
            db.collection("register").findOne({ "email": req.body.email }, (err, result) => {
                if (err) {
                    throw err
                }
                if (result) {
                    res.send("CUSTOMER ALREADY EXISTS!!")
                }
                else {
                    db.collection("client").insertOne(req.body, (err, result) => {
                        if (err) {
                            throw err
                        }
                        else {
                            res.send("SUCCESS")
                        }
                    })
                }
            })

        }})
    }
)


    module.exports = register;
