const express = require('express')
const app = express()
const port = 3000
var path = require('path');
/*
Simple JSON file with the collection of global cities:
https://github.com/lutangar/cities.json
*/
const cities = require('cities.json');

// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/jfile',(req,res) =>{
    res.json(cities[0].name);
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))