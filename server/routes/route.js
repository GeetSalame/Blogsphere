import express from 'express';
import { createBlog, getAllBlogs, getBlog, updateBlog } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blog/:id', getBlog);
router.post('/update/:id', updateBlog);

export default router;