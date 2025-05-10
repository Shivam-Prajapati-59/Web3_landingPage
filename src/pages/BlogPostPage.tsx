import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";

interface BlogPostProps {
  slug: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  // We need to handle undefined case for slug
  return <BlogPost slug={slug || ""} />;
};

export default BlogPostPage;
