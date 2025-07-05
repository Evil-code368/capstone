import auth from '../middleware/auth.js'
import express from "express";
import { adminLogin, approvedCommentById, deleteCommentById, getAllComments, getDashboard } from "../controllers/adminController.js";
import { getAllNews } from "../controllers/newsController.js";
const adminRouter = express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/news",auth, getAllNews);
adminRouter.post("/delete-comment",auth, deleteCommentById);
adminRouter.post("/approve-comment",auth, approvedCommentById);
adminRouter.get("/dashboard",auth, getDashboard);




export default adminRouter;