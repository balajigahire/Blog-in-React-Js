import { usePosts } from "./PostContext";

function Post() {
  const { add } = usePosts();
  return (
    <div className="w-full mt-10">
      <div className="w-4/5 mx-auto flex flex-wrap justify-between gap-8">
        {add.map((post) => (
          <div className="lg:w-512 sm:w-72" key={post.id}>
            <img src={post.img} alt="Image" className="rounded-3xl" />
            <h2 className="mt-5 text-2xl font-normal">{post.title}</h2>
            <p className="text-base leading-tight font-normal text-gray-700 mt-2">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
