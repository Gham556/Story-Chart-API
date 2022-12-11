require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const mongoose = require('mongoose');


console.log(`${DATABASE_URL}`)

const connectDB = () => {
    return mongoose.connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true}, err => {
        if (err){
            console.error(`Connection to DB failed ${DATABASE_URL}}`);
        } else{
            console.log('Connection to DB was successful');
        }
    })
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "DATABASE_URL connection failed"));

module.exports = connectDB;