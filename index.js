const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./db/db');
// const CreateDB = require('./db/createdb')
const port = 3030;
const CRUD_operations = require("./db/createdb");


app.use(express.static(path.join(__dirname,'static')));
app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes for app pages
app.get('/home',function(req,res){
    res.redirect('/home.pug');
});

app.get("/home.pug", (req,res)=>{
    res.render( 'home.pug');
    });
app.get("/page1.pug", (req,res)=>{
    res.render('page1');
});
app.get("/final.pug", (req,res)=>{
    res.render('final');
});
app.get("/form.pug", (req,res)=>{
    res.render('form');
});
app.get("/knockout.pug", (req,res)=>{
    res.render('knockout');
});
app.get("/live_result.pug", (req,res)=>{
    res.render('live_result');
});
app.get("/myTable.pug", (req,res)=>{
    sql.query("SELECT UserName FROM gambling WHERE UserName = 'navehTehori'", (err, res)=>{
        if(err) throw err;
        const tp1 = res;
        console.log(tp1);
        })
    res.render('myTable', {res});
});

app.get("/quatrer.pug", (req,res)=>{
    res.render('quatrer');
});
app.get("/semi.pug", (req,res)=>{
    res.render('semi');
});

app.post("/form", CRUD_operations.signUp);
//app.post("/insert", CRUD_operations.addHomesGimble);
//app.post("/insert", CRUD_operations.addknockoutGimble);
//app.post("/insert", CRUD_operations.addquatrerGimble);
//app.post("/insert", CRUD_operations.addsemiGimble);
//app.post("/insert", CRUD_operations.addfinalGimble);



app.listen(port, ()=>{
    console.log('server is running on port ', port);
});





const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-form', (req, res) => {
  const selectedOption = req.body.option;
  res.render('result', { option: selectedOption });
});


app.get('/result', (req, res) => {
  res.render('result', { option: null });
});