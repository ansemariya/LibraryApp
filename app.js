const express=require("express");
const app=new express();
const port = process.env.PORT ||5000;


const nav=[
    {link:'/home',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbook',name:'Add Book'},
   {link:'/addauthor',name:'Add Author'},
   {link:'/logout',name:'Log Out'},
   
//    {link:'/login',name:'Log In'}
];

const BooksRouter=require('./src/routes/bookRoutes')(nav);
const AuthorsRouter=require('./src/routes/authorRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter =require('./src/routes/addauthorRoutes')(nav);
const loginRouter =require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/books',BooksRouter);
app.use('/authors',AuthorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Library'});
});
app.get('/logout',function(req,res){
    res.render("login",
    {
        nav,
        title:'Library'});
});
app.get('/home',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'});
});
app.listen(port,()=>{console.log("Server Ready at"+port)});