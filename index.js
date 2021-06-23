const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const exphbs =require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname:'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
   }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine','hbs')

app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.render('layouts/main');
  
  });

app.listen(3000,()=>{
    console.log('server started at port:3000');
});

