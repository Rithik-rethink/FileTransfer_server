const express = require('express');
const app = express();
const cors = require('cors');
const postRoute = require('./Routes/postRoute.js');
const loginRoute = require('./Routes/loginRoute.js');
const env = require('dotenv').config();


//middlewares
app.use(cors())
app.use(express.json());

//routes
app.use('/api/usr',postRoute);
app.use('/api/usr',loginRoute);

//listen to port
app.listen(8080 , ()=>{console.log('Listening on port 8080..')});