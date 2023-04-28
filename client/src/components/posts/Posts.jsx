import React, { useContext } from 'react'
import PostItem from './PostItem'
import './style.css'
import { UserContext } from '../../context/UserContext';

function Posts({ post }) {
  const user = useContext(UserContext);
  console.log('Post user', user);
  
  return (
    <article className='grid bg-white'>
    
    </article>
  )
}

export default Posts