const express = require("express");

const { authorization } = require('../middleware/auth')

const router = express.Router();
const {

    getPostById,
    editPost,
    deletePost,
    createNewPost,
    getPosts,
    createNewComment
} = require('../controllers/posts');

router.post('/', authorization, createNewPost)
router.get('/', getPosts);
router.get('/:id', getPostById);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);
router.post('/:id/comment', authorization, createNewComment);

module.exports = router;

