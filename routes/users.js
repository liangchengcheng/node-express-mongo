/**
 * Created by lcc on 16/1/23.
 */
var express= require('express');
var router=express.Router();

var mongoose=require('mongoose');
var User=mongoose.model('User');


router.get('/',function(req,res,next){
    res.send('lljafuskfjklsdj');
});

router.get('/test',function(req,res,next){

    var user =new User({
        uid:1,
        username:'老王'
    });

    user.save(function(err){
        if(err){
            res.end('error');
            return next();
        }
    });

    User.find({},function(err,docs){
        if(err){
            res.end('error');
            return next();
        }
    });

    res.json(user);
});

module.exports=router;