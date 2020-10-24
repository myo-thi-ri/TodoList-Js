const express = require('express')
const bodyParser = require('body-parser');
const { getday } = require('./date');
const app = express();
const date = require(__dirname+"/date.js");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var items = [];
var workItems = [];

app.get('/', function (req, res) {
    var day = date.getDate();
    res.render('list', {
        listTitle: day,
        newListItem:　items
    });

});

app.post('/', (req,res)=>{
    var item = req.body.newItem;
    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    }
    
});

app.get('/work', (req,res)=>{
    var dd = date.getDay();
    res.render('list', {listTitle: dd+"'s Work List", newListItem: workItems});
});

app.get('/about', (req,res)=>{
    res.render('about');
});



app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})