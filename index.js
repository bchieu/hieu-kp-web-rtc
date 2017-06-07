const express = require('express');

const app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',(req,res)=>	res.render('home'));

app.listen(progress.evr.PORT || 3000,()=>console.log('Server start'));