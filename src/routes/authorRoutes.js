const express=require("express");
const AuthorsRouter = express.Router();
function routers(nav){
var Authors=[
    {
        name:'M. T. Vasudevan Nair',
        bio:'Madath Thekkepaattu Vasudevan Nair popularly known as MT. He is an Indian author, screenplay writer, and film director. He is a prolific and versatile writer in modern Malayalam literature. He is one of the masters of post-Independence Indian literature. He was born on 15 July 1933 in Kudallur, Palakkad district. M. T. Vasudevan Nair is a scriptwriter and director of Malayalam films.',
        works:'Naalukettu,Asuravithu,Kaalam,Randamoozham',
        img:"MtvasudevanNair.jpg",
    },
    {
        name:'Vaikom Muhammad Basheer',
        bio:' Vaikom Muhammad Basheer is also known as Beypore Sultan. He was an Indian independence activist and writer of Malayalam literature. He was born on 21st January 1908. He was a writer, humanist, freedom fighter, novelist, and short-story writer, noted for his path-breaking, down-to-earth style of writing. This made him equally popular among literary critics as well as the common man. ',
        works:'Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnuon',
        img:"Vaikom-Muhammad-Basheer.jpg",
    },
    {
        name:'M. Mukundan ',
        bio:'Maniyambath Mukundan is commonly known as M. Mukundan. He is an Indian writer of Malayalam literature. He was born on 10 September 1942. Many of his early works are set in Mahé (Mayyazhi) which has earned him the moniker, Mayyazhiyude Kathakaaran. He is known to be one of the pioneers of modernity in Malayalam literature.',
        works:'Mayyazhippuzhayude Theerangalil, Daivathinte Vikrithikal, Kesavante Vilapangal,Pravasam',
        img:"M-Mukundan-biography.jpg",
    },
    {
        name:'Kamala Surayya (Madhavikutty) ',
        bio:'Kamala Surayya popularly known by her one-time pen name Madhavikutty and married name Kamala Das. She was an Indian poet in English as well as an author in Malayalam from Kerala, India. She was born on 31 March 1934. Her popularity in Kerala is based chiefly on her short stories and autobiography, while her oeuvre in English, written under the name Kamala Das. She is noted for the poems and explicit autobiography. She was also a widely read columnist and wrote on diverse topics including women’s issues, child care, politics among others.',
        works:'Pakshiyude Manam, Neypayasam, Thanuppu,Chandana Marangal,Neermathalam Pootha Kalam',
        img:"Kamala-Surayya-Madhavikutty.jpg",
    }
]



AuthorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
        title:'Library',Authors});
});

AuthorsRouter.get('/:id',function(req,res){
    const id= req.params.id;
    res.render("author",
    {
        nav,
        title:'Library',
    author:Authors[id]});
});
return AuthorsRouter;
}
module.exports = routers;