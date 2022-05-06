import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

router.get('/', (req, res) => getPosts)
router.post('/', (req, res) => createPost)

export default router;