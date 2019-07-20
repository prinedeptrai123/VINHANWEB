var express = require("express");

var app =express();


app.get('/',(req,res)=>{
    res.sendFile('index.html');
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