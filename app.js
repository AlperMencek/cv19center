const express = require('express');
const app = express();
const port = 3000
var path = require('path');
const log = require('./middleware/log');

//init middleware
app.use(log);
//parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// viewed at http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));


//function to recieve the data from a specific city from the city json
function getCity(cityName){
    for(let index in cities){
        let current = cities[index];
       
        if(current['name'] === cityName){
          
            return  cities[index];
        }
    }
}
//locations api routes
app.use('/api/', require('./routes/api/locations'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))