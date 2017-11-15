var mongoose = require("mongoose");
var Photo  = require("./models/photo");

var data = {
    path: "./uploads/comp1.jpg" 
}

function SeedDB(){
        Photo.create(data, function(err, photo){
            if(err){
                console.log(err);
            } else {
                console.log("Added one picture!");
            }
        });
};

module.exports = SeedDB;
