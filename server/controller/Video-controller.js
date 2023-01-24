const Video = require('./../model/Video');
const multer = require('multer')
var ffmpeg = require('fluent-ffmpeg');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
   },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
 })


var upload = multer({ storage: storage }).single("file")


exports.uploadVideo = (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err,message:"not" })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

}


exports.generateThumbnail = (req, res) => {
    
    let thumbsFilePath ="";
    let fileDuration ="";

    ffmpeg.ffprobe(req.body.filePath, function(err, metadata){
        console.dir(metadata);
        console.log(metadata.format.duration);

        fileDuration = metadata.format.duration;
    })

    ffmpeg(req.body.filePath)
    .on('filenames', function (filenames) {
        console.log('Will generate ' + filenames.join(', '))
        thumbsFilePath = "uploads/thumbnails/" + filenames[0];
    })
    .on('end', function () {
        console.log('Screenshots taken');
        return res.json({ success: true, thumbsFilePath: thumbsFilePath, fileDuration: fileDuration})
    })
    .screenshots({
        // Will take screens at 20%, 40%, 60% and 80% of the video
        count: 1,
        folder: 'uploads/thumbnails',
        size:'320x240',
        // %b input basename ( filename w/o extension )
        filename:'thumbnail-%b.png'
    });
}



exports.saveVideo = async (req, res) => {
 
    const video = new Video(req.body)
    try {
        const savedVideo = Video.save(video);
        return res.status(201).json({
            savedVideo, success:true
        })

    }
    catch (err) {
        return res.status(400).json({
          err, success:false
      })  
    }
}
exports.getVideos = async (req, res) => {
    try {
        
    }
    catch (err) {
        
    }
}