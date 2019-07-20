var express = require("express");
const path = require('path');


var app =express();
//express.static(root, [options]);
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT || 3000,()=>{
 console.log("qui");
 console.log("qui");
 console.log("qui");
 console.log("qui");
 console.log("qui");

 console.log("qui");
 console.log("qui");
 console.log("qui");
});