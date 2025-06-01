import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage = () => {
  // Static example
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <PostCard title="Example Post" body="This is an example post body." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
