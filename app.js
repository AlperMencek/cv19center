const express = require('express');
const app = express();
const port = 3000
var path = require('path');
const log = require('./middleware/log');
/*
Simple JSON file with the collection of global cities:
https://github.com/lutangar/cities.json
*/
const cities = require('cities.json');
console.log(getCity("Lyon"))


//init middleware
app.use(log);

// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/jfile',(req,res) =>{
    res.json(getCity("Lyon"));
});

app.get('/api/:id',(req,res) =>{
    const exists =  cities.some(cities => cities.name === req.params.id);
    if(exists){
    res.json(cities.filter(cities => cities.name === req.params.id));
    }else{
        res.status(400).json({msg:`Location ${req.params.id}, could not be found`});
    }
});

//function to recieve the data from a specific city from the city json
function getCity(cityName){
    for(let index in cities){
        let current = cities[index];
       
        if(current['name'] === cityName){
          
            return  cities[index];
        }
    }
}
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))