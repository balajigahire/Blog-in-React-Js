import { usePosts } from "./PostContext";
import Button from "./Button";

function AddPost() {
  const {
    inputName,
    inputBody,
    handleSubmit,
    handleInputChange,
    handleBodyChange,
    add,
  } = usePosts();

  const totalPosts = add.length;

  return (
    <div className="w-full mt-5">
      <div className="w-4/5 mx-auto">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-6xl font-normal">Blog</h1>
          <p className="text-lg font-semibold">{totalPosts} posts found</p>
        </div>
        <div className="w-full bg-gray-100 px-4 py-5 rounded-xl mt-10">
          <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Title"
              value={inputName}
              onChange={handleInputChange}
              className="w-full h-10 px-4 text-base text-gray-500 font-normal rounded-full bg-white outline outline-2 outline-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <input
              type="text"
              placeholder="Enter Description"
              value={inputBody}
              onChange={handleBodyChange}
              className="w-full h-10 px-4 text-base text-gray-500 font-normal rounded-full bg-white outline outline-2 outline-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Button>Add Post</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
