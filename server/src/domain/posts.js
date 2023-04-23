const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllPosts = () => prisma.post.findMany({
  include: {
    user: true,
    comments: true
  }
});

const findPostsByCategory = (category) => prisma.post.findMany({
  where: {
    category: category
  },
  orderBy: {
    createdAt: 'desc'
  },
  include: {
    user: true,
    comments: true
  }
})

const findPostById = (id) => prisma.post.findFirst({
  where: {
    id: id
  },
  include: {
    user: true,
    comments: true
  }
})

const createPost = (title, content, category, username, userId) =>
  prisma.post.create({
    data: {
        title: title,
        content: content,
        category: category,
        ownerName: username,
        userId: userId,
    },
    include: {
      user: true,
    }
  });

const editPostContent = (postId, title, content, category) => prisma.post.update({
  where: {
    id: postId
  },
  data: {
    title: title,
    content: content,
    category: category,
  }
})

const deletePostById = (postId) => prisma.post.delete({
  where: {
      id: postId
    }
})

const createComment = (postId, userId, content, parentId) => prisma.comment.create({
  data: {
    postId: postId,
    userId: userId,
    content: content,
    parentId: parentId,
  }
})



module.exports = {
  findAllPosts,
  findPostsByCategory,
  createPost,
  findPostById,
  editPostContent,
  deletePostById,
  createComment
};
