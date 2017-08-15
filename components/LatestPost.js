import React from "react";
import { Link } from "@survivejs/components";

const LatestPost = ({ section }) => {
  const post = section.pages("blog")[0];

  if (!post) {
    return null;
  }

  return (
    <div>
      <blockquote className="latestpost tip">
        <Link className="latestpost-link" to={post.url}>
          {post.file.attributes.title}
        </Link>
      </blockquote>
    </div>
  );
};

export default LatestPost;
