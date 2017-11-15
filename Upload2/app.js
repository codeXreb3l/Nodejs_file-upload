var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fileUpload = require("express-fileupload");
var path = require("path");
var mongoose = require("mongoose");
var Photo = require("./models/photo");
var seed = require("./seed.js");

mongoose.connect("mongodb://localhost/Picture_Upload", ({useMongoClient: true}));
mongoose.promise =  global.Promise;

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload());

app.get("/", function(req, res){
    res.render("index");
});

app.post("/", function(req, res){
    if(!req.files){
        res.send("No file selected");
    } else {
        var file = req.files.file;
        var extension = path.extname(file.name);
        if(extension !== ".png" && extension !== ".gif" && extension !== ".jpg"){
            res.send("Only image files should be uploaded!");
        } else {
            file.mv(__dirname + "/uploads/" + file.name, function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                    res.send("File Uploaded!")
                }
            });
        }
    }
});

app.get("/:id", function(req, res){
    Photo.findOne({_id: req.params.id}, function(err, photo){
        if(err){
            console.log(err);
        } else {
            res.render("images", ({photo: photo}));
        }
    });
});

// seed();

app.listen(3000, function(req, res){
    console.log("Server started on port 3000!");
});