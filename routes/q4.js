const path = require('path');

const express = require('express');

const router = express.Router();;

router.get('/q4',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views','q4.html'))
});

router.post('/q4',(req, res, next)=>{
    if(req.body.q4=="OR 1=1" && req.body.email=="hackerman@gmail.com"){
        res.redirect('/q4-log');
    }
    else{
        res.redirect('/q4');
    }
})

module.exports = router;
