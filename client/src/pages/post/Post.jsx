import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar';

function Post() {
  //3rd set this state with post
  const [postDisplayed, setPostDisplayed] = useState({});
  // location stores state info
  const location = useLocation();
  // nav goes to what page you want
  const navigate = useNavigate();

  // start - passing post from forum page
  const { post } = location.state;
  console.log('post', post);

  // 2nd - as page opens run set post with the post from location.state
  useEffect(() => {
    setPostDisplayed(post);
  }, []);

  console.log('postDisplayed', postDisplayed);

  return (
    <>
      <Navbar />
      <main>
        View a single post here
        <h2>{postDisplayed.title}</h2>
        <h2>{postDisplayed.content}</h2>
        <h2>{postDisplayed.createdAt}</h2>
        <p>{postDisplayed.ownerName}</p>
      </main>
    </>
  );
}

export default Post;
