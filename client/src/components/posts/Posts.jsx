import React, { useContext } from 'react'
import PostItem from './PostItem'
import './style.css'
import { UserContext } from '../../context/UserContext';



function Posts({ posts, viewPost }) {
  const user = useContext(UserContext);
  console.log('Post user', user);
  
  return (
    <section className='posts__container'>
      <ul>
         {posts.map((post, index) => {
             return (
              <PostItem post={post} key={index} viewPost={viewPost} />
             )
         })}
      </ul>
    </section>
  )
}

export default Posts