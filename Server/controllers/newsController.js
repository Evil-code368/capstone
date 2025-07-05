import fs from "fs";
import imagekit from "../configs/ImageKit.js";
import Comment from "../models/Comment.js";
import News from "../models/News.js";



export const addNews = async (req, res)=>{
    try{
        const {title, subtitle, description, category, isPublished} = JSON.parse
        (req.body.news);
        const  imageFile = req.file;

        // Check if all fields are present
        if (!title || !description || !category ||!imageFile){
            return res.json({success: false, message: "Missing required field"})
         }

         const fileBuffer = fs.readFileSync(imageFile.path)

         //Upload Image to ImageKit
         const response = await imagekit.upload({
            file: fileBuffer,
            fileName:imageFile.originalname,
            folder: "/news"
         })

         // optimization through imagekit URl transformation
         const optimizedImageUrl = imagekit.url({
            path:response.filePath,
            transformation: [
            {quality:'auto'},//auto Compression
            {format: 'webp'}, //Convert to modern format
            {width: '1280'}  //Width resizing

            ]
         });

         const image = optimizedImageUrl;

         await News.create({title, subtitle, description, category, image, isPublished})
         res.json({success: true, message: "Blog added sucessfully"})

    } catch (error) {
           res.json({success: false, message: error.message})

    }
}

export const getAllNews = async (req, res)=>{
   try{
      const news = await News.find({isPublished: true})
      res.json({success: true, news})
   } catch (error){
      res.json({success: false, message:error.message})

   }
}

export const getNewsId = async (req, res)=>{
   try{
      const{NewsId} = req.params;
      const news = await News.findById(NewsId)
      if(!news)
         return res.json({success:false, message:"news not found"})
   } catch(error){
      res.json({success:false,message:error.message})

   }

}


export const deleteNewsById = async (req, res)=>{
   try{
      const{id} = req.body;
      await News.findByIdAndDelete( id);
      
      // Delete all comments associated with the blog
      await Comment.deleteMany({news: id});
       res.json({success:true, message:"news deleted successfully"})
   } catch(error){
      res.json({success: false, message:error.message})

   }
   
}

export const tooglePublish = async (req, res) =>{
   try{
      const {id} = req.body;
      const news = await News.findById(id);
      news.isPublished =!news.isPublished
      await news.save();
      res.json({success: true, message: "News status updated"})

      
   }catch (error){
      res.json({success: false, message: error.message})
   }
}


export const addComment = async (req, res ) =>{
   try{
      const {news, name, content} = req.body;

   await Comment.create({news, name, content});
   res.json ({success: true, message: 'Comment added for review'})

   } catch (error) {
      res. json({success: false, message: error.message})
   }

} 
export const getNewsComments =async (req,res) =>{
try{
   const {newsId} = req.body;
   const comment = await Comment.find ({news: newsId, isApproved: true}).sort
   ({createdAt: -1});
   res.json({success:true, comment})


   
}catch (error){
   res.json({success: false, message: error.message})
  }

}


   
