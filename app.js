const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.listen(port, _=>console.log(`http://localhost:${port}`));

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get("/", home);


app.get("/create", create);


function home(req, res){

    res.send(render("Welcome to my home page!"));

}

function create(req, res){

    res.send(render(fs.readFileSync("html/formCreate.html").toString()));

}// boo!


function render(content){

    let html = fs.readFileSync("html/template.html").toString();
    
    return html.replace("{content}", content);


}