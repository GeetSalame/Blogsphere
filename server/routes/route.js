import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createBlog);
router.get('/blogs/:catg', getAllBlogs);
router.get('/blog/:id', getBlog);
router.post('/update/:id', updateBlog);
router.delete('/delete/:id', deleteBlog);

export default router;