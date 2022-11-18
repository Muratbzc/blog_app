import Box from "@mui/material/Box";
import React from "react";
import BlogCards from "../components/BlogCard";
import { useFetch } from "../helpers/functions";
import loading from "../assets/loading.gif";
import { Typography } from "@mui/material";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  console.log(isLoading, blogList);

  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginTop: "2rem" }}>
        ──── DASHBOARD ────
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {isLoading && (
          <img src={loading} alt="" width={300} style={{ marginTop: "5rem" }} />
        )}

        {blogList?.map((item, index) => {
          return <BlogCards key={index} item={item} />;
        })}
      </Box>
    </>
  );
};

export default Dashboard;
