const express = require('express');
const app = express();
const cors = require('cors');
const postRoute = require('./Routes/postRoute.js');

//middlewares
app.use(cors())
// app.use(express.json());

//routes
app.use('/api/usr',postRoute);

//listen to port
app.listen(8080 , ()=>{console.log('Listening on port 8080..')});