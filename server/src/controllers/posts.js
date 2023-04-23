const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  findAllPosts,
  createPost,
  findPostsByCategory,
  findPostById,
  editPostContent,
  deletePostById,
  createComment
} = require('../domain/posts');

const {
  findUserById
} = require('../domain/users');


const getPosts = async (req, res) => {
  const { category } = req.query;

  try {
    //
    if (!category) {
      const foundPosts = await findAllPosts();

    if (!foundPosts) {
      return res
        .status(404)
        .json({ error: error.message, message: `No posts found` });
    }
    //
    return res.status(200).json({
      message: `Found ${foundPosts.length} posts`,
      code: `201`,
      data: foundPosts,
    });
    }

    // Else return find post by category
    const foundPosts = await findPostsByCategory(category);

    if (!foundPosts) {
      return res
        .status(404)
        .json({ error: `Posts not found or don't exist`, code: `404` });
    }
    //
    return res.status(201).json({
      message: `Found ${foundPosts.length} posts found for category: ${category}`,
      code: `201`,
      data: foundPosts,
    });

  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  const postId = Number(req.params.id);

  if (!postId) {
    return res.status(404).json({ error: `ID missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(postId);

    if (!foundPost) {
      return res.status(404).json({ error: 'Post not found', code: `404` });
    }

    return res.status(201).json({
      message: `Found post ID: ${foundPost.id}`,
      code: `201`,
      data: foundPost,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const createNewPost = async (req, res) => {
  const { title, content, category } = req.body;
  const userId = req.user.id;
  const username = req.user.username;

  if (!title || !content || !category) {
    return res.status(201).json({
      message: `Missing content in request`,
      code: `409`,
    });
  }

  try {
    const newPost = await createPost(
      title,
      content,
      category,
      username,
      userId
    );

    if (!newPost) {
      return res.status(409).json({
        message: `Failed to create post`,
        code: `409`,
      });
    }

    return res.status(201).json({
      message: `Post '${newPost.title}' created successfully`,
      code: `201`,
      data: newPost,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const editPost = async (req, res) => {
  const postId = Number(req.params.id);
  const { title, content, category } = req.body;

  if (!postId) {
    return res.status(404).json({ error: `ID missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(postId);

    if (!foundPost) {
      return res.status(404).json({ error: 'Post not found', code: `404` });
    }

    if (category === '' || category === null || category === undefined) {
      category = foundPost.category;
    }

    const editedPost = await editPostContent(postId, title, content, category);

    return res.status(201).json({
      message: `Post ${editedPost.title} updated successfully`,
      code: `201`,
      data: editedPost,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  const postId = Number(req.params.id);

  if (!postId) {
    return res.status(404).json({ error: `Post id missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(postId);

    if (!foundPost) {
      return res.status(404).json({ error: `Post with id ${postId}`, code: `404` });
    }

    const deletedPost = await deletePostById(postId);

    return res.status(201).json({
      message: `Post '${deletedPost.title}' deleted successfully`,
      code: `201`,
      data: deletedPost,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

const createNewComment = async (req, res) => {
  const postId = Number(req.params.id);
  const userId = req.user.id;
// TODO: check into parent id getting
  // const parentId = req.body.parentId
  const parentId = 1
console.log('parentId', parentId);
  const { content } = req.body
  console.log('user stuff', postId, userId, content);

  if (!postId) {
    return res.status(404).json({ error: `Post postId missing`, code: `404` });
  }
  if (!userId) {
    return res.status(404).json({ error: `Post userId missing`, code: `404` });
  }
  if (!content) {
    return res.status(404).json({ error: `Post content missing`, code: `404` });
  }
  //
  try {

    
    const foundUser = await findUserById(userId)
    console.log('foundUser', foundUser);
    
    if (!foundUser) {
      return res.status(404).json({ error: `User with id ${userId}`, code: `404` });
    }
    
    const foundPost = await findPostById(postId);
    console.log('foundPost', foundPost);

    if (!foundPost) {
      return res.status(404).json({ error: `Post with id ${postId}`, code: `404` });
    }
    const newComment = await createComment(postId, userId, content, parentId)
    console.log('new comment', newComment);

  } catch (error) { 
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
}

module.exports = {
  createNewPost,
  getPostById,
  editPost,
  deletePost,
  getPosts,
  createNewComment,
};
