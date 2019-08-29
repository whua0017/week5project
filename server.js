let express = require('express');
let app = express();
let db = [];
//Setup the view Engine

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));
var filePath =__dirname+"/views/";

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/', function (req, res) {
    let fileName =filePath+"index.html";
    res.sendFile(fileName);
});


app.get("/newtask",function(req,res){
    let fileName =filePath+"addnewtask.html";
    res.sendFile(fileName);
});

app.get("/alltask",function(req,res){
    res.render("listalltask",{task:db});
});

app.post("/addnewtaskInfo",function(req,res){
    db.push(req.body);
    console.log(db);
    res.render("listalltask",{task:db});
});


app.listen(8080);