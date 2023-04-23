import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import { UserContext } from '../../context/UserContext';
import './style.css';
import { categoryInfomation } from '../../utils/Categories';
import Posts from '../../components/posts/Posts';
import NewPostCTA from '../../components/posts/NewPostCTA';
import PostForm from '../../components/posts/PostForm';
// need this
import { useLocation, useNavigate } from 'react-router-dom';

const startingCategory = categoryInfomation[0];

function Forum() {
  const user = useContext(UserContext);
  // need these two on any page using effect
  console.log('Forum user', user);
  const location = useLocation();
  const navigate = useNavigate();

  const [postCategory, setPostCategory] = useState(startingCategory);
  const [posts, setPosts] = useState([]);
  const [creatingPost, setCreatingPost] = useState(false);

  useEffect(() => {
    console.log('using an effect to get post query');
    fetch(`http://localhost:4000/posts?category=${postCategory.query}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [postCategory, creatingPost]);

  const createNewPost = () => {
    console.log('creating new post');
    setCreatingPost(!creatingPost);
  };

  const viewPost = (post) => {
    // using naviagte to pass info through location with state
    navigate('/post', { state: { post: post } });
  };

  const toggleCategory = (event) => {
    const categories = categoryInfomation;
    const newCategory = categories.filter((cat) => cat.id === event.target.id);
    const categoryState = newCategory[0];

    setPostCategory(categoryState);
  };

  return (
    <div className='forum__container'>
      <Nav />
      <div className='forum__content_container'>
        <header className='forum__header__container'>
          <h2>Forum</h2>
          <span>Secondary header </span>
        </header>

        <div className='forum__content__container'>
          <aside className='forum__catagory__container'>
            <h3>Forum categories</h3>
            <div className='categories__container'>
              <span
                name='general'
                id='general'
                onClick={(event) => toggleCategory(event)}
              >
                General
              </span>
              <span
                name='events'
                id='events'
                onClick={(event) => toggleCategory(event)}
              >
                Events
              </span>
              <span
                name='newbies'
                id='newbies'
                onClick={(event) => toggleCategory(event)}
              >
                Newbies
              </span>
            </div>

            <NewPostCTA createNewPost={createNewPost} />

          </aside>

          <main className='forum__posts__container'>

            <h3>Forum category: {postCategory.title}</h3>
            <span>{postCategory.subtitle}</span>

            {creatingPost ? (
              <PostForm postCategory={postCategory} creatingPost={creatingPost} setCreatingPost={setCreatingPost} />
            ) : (
              <Posts posts={posts} viewPost={viewPost}  />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Forum;
