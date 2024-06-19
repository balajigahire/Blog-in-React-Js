import { useContext, useState } from "react";
import { createContext } from "react";

const posts = [
  {
    id: 1,
    img: "../post-img.jpg",
    title: "The best website design practices",
    body: "Learn how to design user-friendly websites that convert and give unforgettable experience.",
  },
  {
    id: 2,
    img: "../post-img.jpg",
    title: "10 tips to start your career in design",
    body: "Professional designers share their experience how they became the best at their fields.",
  },
  {
    id: 3,
    img: "../post-img.jpg",
    title: "How to create a portfolio website",
    body: "We'll walk you through the 7 steps to setting up your portfolio website - from choosing all page elements to designing them.",
  },
  {
    id: 4,
    img: "../post-img.jpg",
    title: "How to create a moodboard",
    body: "We'll share our methods of creating a moodboard for your next creative project.",
  },
];

const PostContext = createContext();

function PostProvider({ children }) {
  const [add, setAdd] = useState(posts);
  const [inputName, setInputName] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [searchPosts, setSearchPosts] = useState("");

  const searchedPosts =
    searchPosts.length > 0
      ? add.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchPosts.toLowerCase())
        )
      : add;

  function handleInputChange(e) {
    setInputName(e.target.value);
  }

  function handleBodyChange(e) {
    setInputBody(e.target.value);
  }

  function handleAdd() {
    const newId = add.length ? add[add.length - 1].id + 1 : 1;
    setAdd([
      { id: newId, img: "../post-img.jpg", title: inputName, body: inputBody },
      ...add,
    ]);
    setInputName("");
    setInputBody("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputName.trim() && inputBody.trim()) {
      handleAdd();
    }
  }

  return (
    <PostContext.Provider
      value={{
        add: searchedPosts,
        setAdd,
        inputName,
        setInputName,
        inputBody,
        setInputBody,
        handleSubmit,
        handleAdd,
        handleInputChange,
        handleBodyChange,
        searchPosts,
        setSearchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
