import React from 'react'
import { Link } from 'react-router-dom'

function PostItem({ post, viewPost }) {
  return (
    <li>
      <article className="post__item">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.createdAt}</p>
        <p>{post.userId}</p>
        <p>{post.ownerName}</p>
        <span onClick={() => viewPost(post)}>Read More</span>
      </article>
    </li>
  )
}

export default PostItem