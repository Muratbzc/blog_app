import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    imageUrl: "",
    context: "",
  });
  return (
    <BlogContext.Provider value={{ blogInfo, setBlogInfo }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
