const express = require('express');


//register routing..............
const defaultRouter = require ('./routes/defaultRouter');
const bookRouter = require ('./routes/bookRouter');
const productRouter = require ('./routes/productRouter');
const serviceRouter = require ('./routes/serviceRouter');
const interfaceRouter = require ('./routes/interfaceRouter');

const app = express();

app.listen(3000, function(){
    console.log("server is running on 3000!!!");

});

 ////routing..........................
 app.use(defaultRouter);
 app.use(bookRouter);
 app.use(productRouter);
 app.use(serviceRouter);
 app.use(interfaceRouter);



////register routing
