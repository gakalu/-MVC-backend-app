const express=require('express');

const userRouter=require('./router');

const app=express();

app.use(express.json);
app.use('/users',userRouter);

app.listen(5000,()=>console.log('5000 port is listing'));
