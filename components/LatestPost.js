import React from "react";
import { Link } from "@survivejs/components";
import Tip from "./Tip";

const Aside = Tip.withComponent("aside");

const LatestPost = ({ section }) => {
  const post = section.pages("blog")[0];

  if (!post) {
    return null;
  }

  return (
    <Aside>
      Latest in the blog:{" "}
      <Link className="latestpost-link" to={post.url}>
        {post.file.attributes.title}
      </Link>
    </Aside>
  );
};

export default LatestPost;
