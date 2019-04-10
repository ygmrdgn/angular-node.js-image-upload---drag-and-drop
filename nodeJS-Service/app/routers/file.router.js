let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

let fileWorker = require('../controllers/file.controller.js');

router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

router.get('/api/file/all', fileWorker.listUrlFiles);
 
router.get('/api/file/:filename', fileWorker.downloadFile);

router.delete('/api/file/delete/:filename', fileWorker.deleteFile);
 
module.exports = router; 