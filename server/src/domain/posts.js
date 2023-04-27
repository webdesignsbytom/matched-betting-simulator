import dbClient from '../utils/dbClient.js';

export const findAllPosts = () =>
  dbClient.post.findMany({
    include: {
      user: true,
      comments: true,
    },
  });

export const findPostsByCategory = (category) =>
  dbClient.post.findMany({
    where: {
      category: category,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: true,
      comments: true,
    },
  });

export const findPostById = (id) =>
  dbClient.post.findFirst({
    where: {
      id: id,
    },
    include: {
      user: true,
      comments: true,
    },
  });

export const createPost = (title, content, category, username, userId) =>
  dbClient.post.create({
    data: {
      title: title,
      content: content,
      category: category,
      ownerName: username,
      userId: userId,
    },
    include: {
      user: true,
    },
  });

export const editPostContent = (postId, title, content, category) =>
  dbClient.post.update({
    where: {
      id: postId,
    },
    data: {
      title: title,
      content: content,
      category: category,
    },
  });

export const deletePostById = (postId) =>
  dbClient.post.delete({
    where: {
      id: postId,
    },
  });

export const createComment = (postId, userId, content, parentId) =>
  dbClient.comment.create({
    data: {
      postId: postId,
      userId: userId,
      content: content,
      parentId: parentId,
    },
  });
