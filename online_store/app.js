const express=require('express');
const morgan =require('morgan');//if the app is unser production....detailed logs will be skipped as morgan is skipped
const app=express();
const productroute=require('./routes/productroute');
const cartroute=require("./routes/cartroute");
// const userrouter=require('./routes/userroutes');
// const tablerouter=require('./routes/tableroutes')

//Middleware
// console.log("hi");
if(process.env.NODE_ENV==="development")
{
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/page`));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use('/products',productroute);
  app.use('/api/v1/cart',cartroute);
//   app.use('/api/v1/user',userrouter);
//   app.use('/api/v1/table',tablerouter);
//   app.all('*', (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
//   });
  
//   app.use(globalErrorHandler);

  module.exports=app;



