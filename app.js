const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const cities = require('./Model/Jfile');

// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/jfile',(req,res) =>{
    res.json(cities);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))