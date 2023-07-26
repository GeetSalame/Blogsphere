import express from 'express';
import { createBlog } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createBlog);

export default router;