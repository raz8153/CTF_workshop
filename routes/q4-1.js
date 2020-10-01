const path = require('path');

const express = require('express');

const router = express.Router();;

router.get('/q4-log',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views','q4-1.html'))
})

module.exports = router;