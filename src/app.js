const express = require('express');
const morgan = require('morgan');

const imageRouter = require('./routes/imageRouter.js');
const userRouter = require('./routes/userRouter.js');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/user',userRouter)
app.use('/api/v1/image', imageRouter);


module.exports = app;
