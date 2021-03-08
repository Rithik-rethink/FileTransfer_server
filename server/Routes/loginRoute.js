const router = require('express').Router();
const rsa = require('../rsa.js');

router.get('/login',(req,res)=>{
    try{

        list = rsa();
        // console.log(list);
        let public_key = [list[0] , list[1]];
        const response = new Object();
        response.code = 1;
        response.message = 'Public Key generated';
        response.public_key = public_key;
        res.status(206).send(response);
    }
    catch(e){
        const error_response = new Object();
        error_response.code = 0;
        error_response.message = 'Algorithm Exception';
        res.status(500).send(error_response);
    }
})

router.post('/login',(req,res)=>{
    list = rsa();
    // console.log(list);
    const response = new Object();
    response.code = 0;
    response.message = 'Working';
    res.status(200).send(response);
})

module.exports = router;