const express = require('express');
const signupRouter=express.Router();
function router(nav){
    signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav,
        title:'Library'
    })
})
signupRouter.get('/index',function(req,res){
    res.render('index',{
    nav,
        title:'Library'});
})
signupRouter.get('/login',function(req,res){
    res.render('login',{
    nav,
        title:'Library'});
})
return signupRouter;
}
module.exports=router;