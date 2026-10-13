const express = require('express');
const router = require('./routes');

const app = express();

//middlaware
app.use(express.json());
app.use(express.urlencoded({extend:true}));

//ruta princiapal de mi api
app.use('/api', router);


app.get("/",(req,res)=>{ res.send("API Rest ficha 3407180")})
module.exports = app;