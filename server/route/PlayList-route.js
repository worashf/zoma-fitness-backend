const express = require('express');
const { createPlayList, getPlayListById, getAllPlayList, updatePlayList,deletePlaylist } = require('../controller/PlayList-controller');
const {adminAuth} = require('../midleware/auth')
const router = express.Router();


router.post('/play-list' ,createPlayList);
router.put('/play-list' ,updatePlayList);

router.get('/play-list/:id' ,getPlayListById);

router.get('/play-list' ,getAllPlayList);

router.delete('/play-list' ,deletePlaylist);





module.exports= router;