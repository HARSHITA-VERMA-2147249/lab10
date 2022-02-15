const fs = require("fs");
const users = require("./data.json")
const express = require("express");
const app = express();





app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server is now active on localhost:8080");
});




//reading the file:-
fs.readFile('./data.json', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(JSON.parse(data));
});

// defining new users
let user = {
    name: "avi singh",
    email: "avi.singh123@gmail.com",
    phone_no: 8730012698,
    date_appoint: "2021-02-11",
    age: 23,
    price: 500
};

//adding new data to users object
users.push(user);

//writing to the file
fs.writeFile("data.json", JSON.stringify(users), err => {

    if (err) throw err;

    console.log("done writing to the file"); //success
});

