import Box from "@mui/material/Box";
import React from "react";
import BlogCards from "../components/BlogCard";
import { useFetch } from "../helpers/functions";
import loading from "../assets/loading.gif";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  console.log(isLoading, blogList);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {isLoading && (
        <img src={loading} alt="" width={300} style={{ marginTop: "5rem" }} />
      )}

      {blogList?.map((item) => {
        const { id } = item;
        return <BlogCards key={id} item={item} />;
      })}
    </Box>
  );
};

export default Dashboard;
