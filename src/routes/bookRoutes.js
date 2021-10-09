const express=require("express");
const BooksRouter = express.Router();
function router(nav){
var Books=[
    {
        title:'Randamoozham',
        author:' M. T. Vasudevan Nair',
        genre:'Mythology',
        img:"randamoozham.jpg",
    },
    {
        title:'Aadujeevitham',
        author:' Benyamin',
        genre:'fiction',
        img:"Aadujeevitham.jpg",
    },
    {
        title:'Indulekha ',
        author:'O. Chandu Menon',
        genre:'Fiction',
        img:"indulekha.jpg",
    }
]



BooksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav,
        title:'Library',Books});
});

BooksRouter.get('/:id',function(req,res){
    const id= req.params.id;
    res.render("book",
    {
        nav,
        title:'Library',
    book:Books[id]});
});
return BooksRouter;
}
module.exports = router;