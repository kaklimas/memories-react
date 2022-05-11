import express from 'express'
const router = express.Router();
import UserPosts from '../models/postMessages.js'

router.post('/newpost', async (req, res) => {
    const newPost = new UserPosts({
        id: req.body.id,
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
router.delete('/posts:id', async (req, res) => {
    const postID = req.params.id
    const deletedPost = await UserPosts.deleteOne({id: postID})
    res.json(deletedPost)}
)

export default router

