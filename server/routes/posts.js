import express from 'express'
const router = express.Router();
import UserPosts from '../models/postMessages.js'


router.post('/newpost', async (req, res) => {
    const newPost = new UserPosts({
        title: req.body.title,
        message: req.body.message,
        creator: req.body.creator,
        tags: req.body.tags,
        selectedFile: req.body.selectedFile
    })
    newPost.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => res.json(error))
})
router.get('/posts', async (req, res) => {
    const allPosts = await UserPosts.find({})
    res.json(allPosts)
})
export default router

