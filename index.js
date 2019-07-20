var express = require("express");

var app =express();


app.get('/',(req,res)=>{
    res.end('helo qui');
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