import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Navbar from "../../components/nav/Navbar";
// Context
import { UserContext } from "../../context/UserContext";
// Data
import { categoryInfomation } from "../../utils/data/Categories";
// Components
import Posts from "../../components/posts/Posts";
import NewPostCTA from "../../components/posts/NewPostCTA";
import PostForm from "../../components/posts/PostForm";
// Fetcch
import client from "../../utils/axios/client";
import PostItem from "../../components/posts/PostItem";

const startingCategory = categoryInfomation[0];

function ForumPage() {
  const user = useContext(UserContext);

  const [postCategory, setPostCategory] = useState(startingCategory);
  const [allPosts, setAllPosts] = useState([]);
  const [creatingPost, setCreatingPost] = useState(false);

  console.log("all posts", allPosts);
  useEffect(() => {
    client
      .getAPI(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log("res", res.data);
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.error("Unable to retrieve user data", err);
      });
    //   }
  }, [postCategory, creatingPost]);

  const createNewPost = () => {
    console.log("creating new post");
    setCreatingPost(!creatingPost);
  };

  // const viewPost = (post) => {
  //   // using naviagte to pass info through location with state
  //   navigate('/post', { state: { post: post } });
  // };

  const toggleCategory = (event) => {
    const categories = categoryInfomation;
    const newCategory = categories.filter((cat) => cat.id === event.target.id);
    const categoryState = newCategory[0];

    setPostCategory(categoryState);
  };

  return (
    <div className="grid min-h-screen grid-rows-reg lg:max-h-screen lg:overflow-hidden bg-yellow-400 dark:bg-black dark:text-gray-100">
      <Navbar />
      <section className="grid grid-rows-reg p-2">
        <header className="p-4 grid">
          <article>
            <h1 className="font-bruno text-3xl font-semibold">Forum</h1>
            <h2>
              Look for user discussions, tips and latests bet information in our
              various forums
            </h2>
          </article>
        </header>
        {/* Form container */}
        <main className="grid h-full overflow-y-visible">
          <section className="outline-2 outline-black outline rounded grid grid-cols-reg">
            {/* Side bar */}
            <nav className="bg-green-700 border-r-2 border-solid border-black p-4">
              <article className="grid h-full grid-rows-a1a">
                <div className="outline-2 bg-yellow-300 outline-black outline rounded text-center p-1 mb-4">
                  <h3>Forum Categories</h3>
                </div>
                <section className="grid items-center text-xl font-semibold">
                  <section className="grid text-center w-full gap-4">
                    <button
                      className="outline-2 outline-black outline rounded bg-yellow-300 hover:bg-yellow-600"
                      name="general"
                      id="general"
                      onClick={(event) => toggleCategory(event)}
                    >
                      General
                    </button>
                    <button
                      className="outline-2 outline-black outline rounded bg-yellow-300 hover:bg-yellow-600"
                      name="events"
                      id="events"
                      onClick={(event) => toggleCategory(event)}
                    >
                      Events
                    </button>
                    <button
                      className="outline-2 outline-black outline rounded bg-yellow-300 hover:bg-yellow-600"
                      name="newbies"
                      id="newbies"
                      onClick={(event) => toggleCategory(event)}
                    >
                      Newbies
                    </button>
                  </section>
                </section>

                <section>
                  <button className="outline-2 bg-red-400 outline-black outline rounded text-center p-1 mb-4 w-full">
                    <h3>Create Post</h3>
                  </button>
                </section>
              </article>
            </nav>

            {/* Main posts list */}
            <section className="">
              <section className="border-b-2 border-black border-solid">
                <article className="flex justify-between p-2 text-xl">
                  <h3>
                    Forum category:{" "}
                    <span className="font-semibold">{postCategory.title}</span>
                  </h3>
                  <span>{postCategory.subtitle}</span>
                </article>
              </section>

              {allPosts.length > 0 ? (
                <section className="bg-white p-2 grid max-h-[720px] gap-2 overflow-y-scroll">
                  {allPosts.map((post, index) => {
                    return <PostItem post={post} />;
                  })}
                </section>
              ) : (
                <div>
                  <p>No posts to display</p>
                </div>
              )}
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default ForumPage;
