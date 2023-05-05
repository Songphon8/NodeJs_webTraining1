const contentRouter = require('./content');
const express = require('express');
const{ res } = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.port|| 3030;

app.set("view engine","pug");
app.set("views",'./content/views');
app.use(express.static('public'));
app.use(morgan("common",{immediate:true}));
app.use(express.urlencoded({ extended: false}));

app.use('/content',contentRouter)

app.get('/',(req, res)=> res.redirect('/content'));

app.listen(port,() => console.log(`Server Running at port http://localhost:${port}`));