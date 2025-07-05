import jwt from 'jsonwebtoken'
import News from '../models/News.js'
import Comment from '../models/Comment.js';

export const adminLogin = async (req, res)=>{
    try{
        const{email, password}= req.body;


        if(email !==process.env.ADMIN_EMAIL || password !==process.env.
            ADMIN_PASSWORD){
                return res.json({success:false, message: "Invalid Credentials"})
            }
            const token = jwt.sign({email},process.env.JWT_SECRET)
            res.json({success:true, token})
        }catch(error) {
            res.json({success:false, message:error.message})
        }
        
    }

    export const getAllNewsAdmin = async (req,res) =>{
   try{
      const news = await News.find({}).sort ({createdAt: -1});
      res.json({ success: true, news})

   }catch (error){
      res.json({success: false, message: error.message})
   }
}

export const getAllComments = async (req, res)=>{
   try{
      const comment = await Comment.find({}).populate("news").sort({createdAt: -1})
      res.json ({success:true, comment})
   }catch(error){
      res.json ({success: false, message: error.message})
   }
}

export const getDashboard = async (req, res) =>{
   try{
      const recentNews = await News.find({}).sort({createdAt: -1}).limit (5);
      const news = await News.countDocuments();
      const comment = await Comment.countDocuments()
      const drafts = await News.countDocuments({isPublished: false})
      const dashboardData = {
         news, comment, drafts, recentNews
      }
      res.json({success: true, dashboardData})

   }catch(error){
      res.json({success: false, message:error.message})
   }

}

export const deleteCommentById = async (req, res) =>{
   try{
      const {id} = req.body;
      await Comment.findByIdAndDelete(id);
      res.json({success: true, message: " Comment delete successfully"})
   }catch (error){
      res.json({success: false, message:error.message})
   }

   }

   export const approvedCommentById =  async(req, res) =>{
      try{
         const{id} = req.body;
         await Comment.findByIdAndUpdate(id, {isApproved: true });
          res.json({success: true, message: "Comment approved successfully"})
      }catch(error) {
         res.json({success: false, message: error.message})
      }

      }