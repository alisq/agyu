
const csvFilePath='data.csv'
const csv=require('csvtojson')
var express = require('express');
var app = express();


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
     app.get('/json', function(req, res) {  
  res.json(jsonObj);
});
})
 



//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder


var server = app.listen(5000);
