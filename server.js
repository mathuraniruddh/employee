var express = require('express')
var app = express();
var mongoose  =  require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
var http = require('http')
var bodyparser = require('body-parser');
const { connect } = require('http2');
var Employeeroute = require('./routers/employee')
var server  = http.createServer(app)
mongoose.connect(process.env.DBUrl)
.then(()=> {console.info("connected")})
.catch((e)=>{console.log("error",e)})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use('/emp',Employeeroute)
server.listen(process.env.PORT)