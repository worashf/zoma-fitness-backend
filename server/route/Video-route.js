const express = require('express');
const {uploadVideo,generateThumbnail, saveVideo} = require ('../controller/Video-controller')
const router = express.Router();


router.post('/upload-video' ,uploadVideo);
router.post('/thumbnail', generateThumbnail);
router.post('/save-video', saveVideo);

module.exports= router;