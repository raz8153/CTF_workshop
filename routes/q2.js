const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/q2',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views','q2.html'))
});

router.post('/q2',(req,res, next)=>{
    
    if(req.body.q2=='hackclub-2020'){
       res.redirect('/q3')
    }
    else{
        res.redirect('/q2')
    }
});

module.exports = router;