const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads/'); },
    filename: function (req, file, cb) 
    { cb(null, file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname)); }
});

const upload = multer({ storage,
    fileFilter (req,file, cb) {
        if (file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(null, true)
 }});

const AuthRegisterUserController = require('../controllers/AuthRegisterUserController');

 router.get("", AuthRegisterUserController.init);
 router.post("/auth/register/user", upload.single("image"), AuthRegisterUserController.registerUser);


module.exports = router;