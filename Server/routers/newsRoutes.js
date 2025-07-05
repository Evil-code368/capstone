import express from 'express';
import { addComment, addNews, deleteNewsById, getAllNews, getNewsComments, getNewsId, tooglePublish } from '../controllers/newsController.js';
import upload from "../middleware/multer.js"
import auth from '../middleware/auth.js';

const newsRouter = express.Router();

newsRouter.post("/add",upload.single('image'),auth, addNews)
newsRouter.get('/all', getAllNews);
newsRouter.get('/newsId', getNewsId);
newsRouter.post('/delete',  auth, deleteNewsById);
newsRouter.post('/toggle-publish', auth, tooglePublish);
newsRouter.post('/add-comment', addComment);
newsRouter.post('/comments',getNewsComments);


export default newsRouter;

