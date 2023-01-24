
const  PlayList =require('../model/PlayList')

exports.createPlayList = async (req, res) => {

 
    try {
       
        const Playlist = new PlayList(req.body);
    
        const playlist = await Playlist.save();
            const data = {created:true,err:false, playlist,message:'Created Successfully'}
            return res.status(201).json({ data});
        
           
       }
       
    catch (err) {
        
           return res.status(401).json({
               err: "some thinf went wrong"
           })
       }
    


}

exports.getPlayListById = async (req, res) => {
    const { id } = req.params;
    try {
    
            const playlist = await PlayList.findById({ _id: id })
      
            
           return res.status(201).json({playlist})
           
    
       
        
    }
    catch (err) {
        console.log(err,"no data")
        return res.status(400).json({ message: `play list not found by this ${id} type  corect id` })
}    

}


exports.getAllPlayList = async (req, res) => {
   
        try {
          /** getting all department data */
          const playlist = await PlayList.find({})
          
            return res.status(201).json({
             playlist,success:true
         })
        }
        catch (err) {
       
            return res.status(400).json({
             success:false,err
         })
        }
      
}
exports.updatePlayList = async (req, res) => {
    const {title,id} = req.body;
        
    try {
    
        const updatedData = await PlayList.findOneAndUpdate({ _id: id }, req.body , { new: true });
            console.log(updatedData)
          return   res.status(201).json({updated:true,updatedData, err:false})
      
            
        
    }
    catch (err) {
        return   res.status(400).json({message:"some thing is wrong"})
    }
}

exports.deletePlaylist = async(req, res) => {
    const  _id  = req.body


    try {
        const playlist = await PlayList.findByIdAndDelete(_id)
       
            return res.status(201).json({
                data: playlist,
                deleted:true
         })
        
      
     
    }
    catch (err) {
        return res.status(400).json({
            message: "some thing goes wrong",
            deleted: false,
            err
        })  
    }
}