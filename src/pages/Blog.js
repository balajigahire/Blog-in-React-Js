import AddPost from "../components/AddPost";
import Footer from "../components/Footer";
import NewHeader from "../components/NewHeader";
import Post from "../components/Post";
import { PostProvider } from "../components/PostContext";

function Blog() {
  return (
    <>
      <PostProvider>
        <NewHeader />
        <AddPost />
        <Post />
        <Footer />
      </PostProvider>
    </>
  );
}

export default Blog;
