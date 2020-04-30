const express = require('express')
const app = express()
const port = 3000
var path = require('path');
/*
Simple JSON file with the collection of global cities:
https://github.com/lutangar/cities.json
*/
const cities = require('cities.json');
console.log(getCity("Lyon"))
// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/jfile',(req,res) =>{
    res.json(getCity("Lyon"));
});
function getCity(cityName){
    for(let index in cities){
        let current = cities[index];
       
        if(current['name'] === cityName){
          
            return  cities[index];
        }
    }
}
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))