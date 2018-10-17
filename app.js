const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express('express-handlebars'); 
const bodyParser = require('body-parser');

//map global promise, get rids of warning
mongoose.Promise = global.Promise; 
// Connection to mongoose
mongoose.connect('mongodb://localhost/firstblockchain-dev', {useMongoClient: true
})
.then(() => console.log('MongoDB has been Connected')) 
.catch(err => console.log(err));

// Load Model
require('./models/block');
const Idea = mongoose.model('blocks');

//imports blockchain
//require('./blockchain.js');

// Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Index Route
app.get('/',(req, res) => {
    const title = 'Hello Seller!';
    res.render('index', {title: title}); 
})

//About Route
app.get('/about', (req, res) => {
    res.render('about');
})

// Ideas Index Route
app.get('/ideas', (req, res) => {
    Idea.find({})
        .then(ideas => {
            res.render('ideas/index', {
                ideas:ideas
            })
        })
    res.render('ideas/index'); 
});
// Idea Form Add Route
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
})

let blockchain = require('./blockchain.js');
let CurrentChain = blockchain.getBlockChain();
CurrentChain.addBlock(new blockchain.newBlock(new blockchain.newItem(1,1,1), "Frank"));
//CurrentChain.addBlock(new Block(new Item("hi","hello","yo"), "Dragon"));
app.post('/ideas', (req,res) =>{
    // takes the data inputed and adds a new block
    CurrentChain.addBlock(new blockchain.newBlock(new blockchain.newItem(req.body.productName,req.body.productPrice,req.body.website), req.body.seller));
    console.log(JSON.stringify(CurrentChain,null,4));
    const newUser ={
        seller: req.body.seller,
        itemProductWebsite: req.body.website,
        itemProductPrice: req.body.productPrice,
        itemProductName: req.body.productName,
        useNewUrlParser: true
    }
    new Idea(newUser)
        .save()
        .then(idea => {
        res.redirect('/');
    })
});
    /*
    const newUser ={
        seller: req.body.seller,
        address: req.body.address,
        useNewUrlParser: true
    }
    new Idea(newUser)
        .save()
        .then(idea => {
        res.redirect('/ideas');
    })
    */




const port = 5000; 

app.listen(port,  () => {
    console.log(`Server started onm port ${port}`);
});