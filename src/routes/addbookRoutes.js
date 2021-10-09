const express = require('express');
const addbookRouter=express.Router();
function router(nav){
addbookRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title:'Library'
    })
})
addbookRouter.get('/add',function(req,res){
    res.render('index',{
    nav,
        title:'Library'});
})
return addbookRouter;
}
module.exports=router;