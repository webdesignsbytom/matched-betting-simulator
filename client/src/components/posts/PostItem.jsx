import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <article className="p-1 border-b-2 border-black border-solid pb-2">
      <div className="grid md:grid-flow-col justify-between py-2">
        <h3>
          <span className="font-semibold">Title:</span> {post.title}
        </h3>
        <h4>
          <span className="font-semibold">Posted By:</span> White Goodman
        </h4>
      </div>
      <p>
        <span className="font-semibold">Content:</span> {post.body}
      </p>
      <div className="mb-2 mt-4">
        <Link
          to="/"
          className="outline outline-2 outline-black rounded px-2 py-1 hover:bg-yellow-400"
        >
          <button>Click to read more</button>
        </Link>
      </div>
    </article>
  );
}

export default PostItem;
