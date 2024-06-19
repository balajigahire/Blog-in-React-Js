import { usePosts } from "./PostContext";

function NewHeader() {
  const { searchPosts, setSearchPosts } = usePosts();
  return (
    <header className="w-full py-4 bg-white shadow">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <img src="../blog-logo.png" alt="Logo" />
        <div className="flex gap-3">
          <div className="w-72">
            <input
              type="text"
              value={searchPosts}
              placeholder="Search..."
              onChange={(e) => setSearchPosts(e.target.value)}
              className="w-full h-10 px-4 text-sm text-gray-500 font-normal rounded-full bg-white outline outline-2 outline-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <button
            className="w-28 h-10 bg-red-500 rounded-full text-sm text-white font-semibold"
            onClick={() => setSearchPosts("")}
          >
            Clear Posts
          </button>
        </div>
      </div>
    </header>
  );
}

export default NewHeader;
