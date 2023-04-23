import React from 'react'

function NewPostCTA({ createNewPost }) {


  return (
    <button 
        className='new__post__cta'
        onClick={createNewPost}
        >
          
        Create Post
    </button>
  )
}

export default NewPostCTA