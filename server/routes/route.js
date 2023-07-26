import express from 'express';
import { createBlog, getAllBlogs } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createBlog);
router.get('/blogs', getAllBlogs);

export default router;