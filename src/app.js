const express= require('express');
const hbs= require('hbs');
const req = require('express/lib/request');
const app=express();
const port= process.env.PORT || 3000;
const path = require('path');

const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../Templates/views");
const partials_path= path.join(__dirname,"../Templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/index",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error");
})
app.listen(port,()=>{
     console.log(`hello ${port}`);
})




