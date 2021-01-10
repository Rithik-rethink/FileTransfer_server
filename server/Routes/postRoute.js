const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');

router.post('/post',(req,res)=>{
    var dir = req.headers.authorization.split('$')[1];
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `/media/rishabh/Transcend/${dir}`)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' +file.originalname )
        }
    })

    var upload = multer({ storage: storage }).array('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err.message);
            return res.status(500).json(err.message)
        } else if (err) {
            console.log(err.message);

            return res.status(500).json(err.message)
        }
        var response = new Object;
        response.code = 1;
        response.message = 'Uploaded Successfully'
        res.status(200).send(response);

    })
})

router.get('/post',(req,res)=>{
    let files = []
    try{

        fs.readdirSync('/media/rishabh/Transcend').forEach(file => {
            var stats = fs.statSync(`/media/rishabh/Transcend/${file}`);
            if(stats.isDirectory()){
                files.push(file);
            }
            
        });
        var response = new Object;
        response.data = files;
        response.code = 1;
        response.message = 'Uploaded Successfully'
        res.status(200).send(response);
    }
    catch(e){
        var response = new Object;
        response.data = "Database Exception";
        response.code = 0;
        res.status(500).send(response);
    }
})

module.exports = router