const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.listen(port, _=>console.log(`http://localhost:${port}`));



app.get("/", home);


function home(req, res){

    res.send("Hello world!!! From online kepler 22b");

}