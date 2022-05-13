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
router.get('/post:id', async (req, res) => {
    const postID = req.params.id
    const post = await UserPosts.find({'id': postID})
    res.json(post[0])
})

router.post('/postlike:id', async (req, res) => {
    const postID = req.params.id
    const filter = {'id': postID}

    const likedPost = (await UserPosts.find(filter))[0]
    const updateDoc = {
        $set: {
            likeCount: likedPost.likeCount + 1
        }
    }
    const result = await UserPosts.updateOne(filter, updateDoc);
    res.json(result)
})
router.post('/postdislike:id', async (req, res) => {
    const postID = req.params.id
    const filter = {'id': postID}

    const likedPost = (await UserPosts.find(filter))[0]
    const updateDoc = {
        $set: {
            likeCount: likedPost.likeCount - 1
        }
    }
    const result = await UserPosts.updateOne(filter, updateDoc);
    res.json(result)
})

router.delete('/posts:id', async (req, res) => {
        const postID = req.params.id
        const deletedPost = await UserPosts.deleteOne({id: postID})
        res.json(deletedPost)
    }
)


export default router

