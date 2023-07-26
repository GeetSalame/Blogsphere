import express from 'express';
import { createBlog, getAllBlogs, getBlog } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blog/:id', getBlog);

export default router;