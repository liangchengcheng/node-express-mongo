/**
 * Created by lcc on 16/1/23.
 */
var express = require('express');
var bodyParser=require('body-parser');

var mongoose=require('.config/mongoose.js');
var  db=mongoose();

var app=express();

//json类型的body
app.use(bodyParser.json());

//query string 类型的body
app.use(bodyParser.urlencoded({
    extended:false
}));

//静态文件目录
app.use(express.static(__dirname+'/public'));

//路由和业务逻辑分散到不同的模块
app.use('/user',require('./routes/users.js'));

app.listen(3000);