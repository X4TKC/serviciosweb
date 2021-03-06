var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var userRoute = require('./routes/user-route');
var cors = require('cors');
var app = express();

const PORT = config.port || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.get("/",(req,res)=>{
    res.send({mensaje:"HOLa mundo"})
})
// localhost:3000/usuario/insert
app.use("/angular",userRoute);

app.listen(PORT,()=>{
    console.log("Hitler will be back also here is your port "+ PORT)
})