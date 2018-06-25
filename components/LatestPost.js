import React from "react";
import { Link } from "@survivejs/components";
import Tip from "./Tip";

const LatestPost = ({ section }) => {
  const post = section.pages("blog")[0];

  if (!post) {
    return null;
  }

  return (
    <Tip>
      Latest in the blog:{" "}
      <Link className="latestpost-link" to={post.url}>
        {post.file.attributes.title}
      </Link>
    </Tip>
  );
};

export default LatestPost;
