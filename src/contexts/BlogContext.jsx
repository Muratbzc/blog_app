import { useContext } from "react";

export const BlogContext = useContext();

const BlogProvider = ({ children }) => {
  const [info, setInfo] = useState({
    title: "",
    ımageUrl: "",
    context: "",
    date: "",
    email: "",
  });
  return (
    <BlogContext.Provider value={{ info, setInfo }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
