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
require('./models/Idea');
const Idea = mongoose.model('ideas');

//imports blockchain
require('./blockchain');

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
        then(ideas => {
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

app.post('/ideas', (req,res) =>{
    let emptys = [];
    if(!req.body.seller){
        emptys.push({text:'empty first text box'});
    }
    if(!req.body.address){
        emptys.push({text:'empty second text box'});
    }
    
    if(emptys.length > 0){
        res.render('ideas/add', {
            emptys: emptys, 
            seller:  req.body.seller,
            address: req.body.address
        });
    } else {
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
    }
});

const port = 5000; 

app.listen(port,  () => {
    console.log(`Server started onm port ${port}`);
});