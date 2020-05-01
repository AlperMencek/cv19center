const express = require('express');
const router = express.Router();
/*
Simple JSON file with the collection of global cities:
https://github.com/lutangar/cities.json
*/
const cities = require('cities.json');

router.get('/a',(req,res) =>{
    res.json(cities);
});

router.get('/:name',(req,res) =>{
    const exists =  cities.some(cities => cities.name === req.params.name);
    if(exists){
    res.json(cities.filter(cities => cities.name === req.params.name));
    }else{
        res.status(400).json({msg:`Location ${req.params.name}, could not be found`});
    }
});


//placeholder post method
router.post('/' ,(req,res) =>{
    res.send(req.body);
})

module.exports = router;