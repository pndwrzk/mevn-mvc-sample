const mongoose = require("mongoose");

const nameDB = "mevn_db";
const mongoDB = `mongodb://127.0.0.1:27017/${nameDB}`;
mongoose
    .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log("Can not connect to the database" + err);
    });